import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { SongQuestion, AnswerOption, AnswerStatus } from '@/types/game';
import { songsData } from '@/data/songs';
import { shuffleArray } from '@/utils/shuffle';
import { useAudioStore } from './audio';
import { useRankingStore } from './ranking';

const TOTAL_QUESTIONS_PER_GAME = 10;
const SECONDS_TO_ANSWER = 15; // Tiempo límite para contestar cada pregunta

export const useGameStore = defineStore('game', () => {
    const audioStore = useAudioStore();
    const rankingStore = useRankingStore();

    // Estados de la partida
    const playerName = ref('');
    const gameStage = ref<'welcome' | 'playing' | 'ended'>('welcome');
    const currentRoundIndex = ref(0); // 0 a 9
    const selectedQuestions = ref<SongQuestion[]>([]);
    const currentShuffledOptions = ref<AnswerOption[]>([]);
    const selectedOptionId = ref<string | null>(null);
    const answerStatus = ref<AnswerStatus>('idle');
    const feedbackMessage = ref('');

    // Marcadores y métricas
    const score = ref(0);
    const correctCount = ref(0);
    const wrongCount = ref(0);
    const timeoutCount = ref(0);
    const totalListeningTime = ref(0); // Segundos acumulados para desempate
    const finalRankingPosition = ref<number | null>(null);

    // Temporizador de cuenta atrás para responder
    const timeLeft = ref(SECONDS_TO_ANSWER);
    let countdownTimer: number | null = null;

    // Propiedades computadas
    const currentQuestion = computed<SongQuestion | null>(() => {
        return selectedQuestions.value[currentRoundIndex.value] || null;
    });

    const currentRoundNumber = computed(() => currentRoundIndex.value + 1);

    const progressPercentage = computed(() => {
        return Math.round((currentRoundNumber.value / TOTAL_QUESTIONS_PER_GAME) * 100);
    });

    const accuracyPercentage = computed(() => {
        return Math.round((correctCount.value / TOTAL_QUESTIONS_PER_GAME) * 100);
    });

    const performanceFeedback = computed(() => {
        const accuracy = accuracyPercentage.value;
        if (accuracy >= 90) {
            return {
                title: '¡Excelente! 🌟',
                subtitle: 'Tienes un gran conocimiento musical',
            };
        }
        if (accuracy >= 70) {
            return {
                title: '¡Muy Bien! 👏',
                subtitle: '¡Tienes buen oído para la música!',
            };
        }
        if (accuracy >= 50) {
            return {
                title: '¡Bien jugado! 🎵',
                subtitle: 'Buen intento, ¡sigue practicando para subir al top!',
            };
        }
        return {
            title: '¡Sigue intentándolo! 💪',
            subtitle: 'Entrena tu oído y vuelve a intentarlo para entrar al ranking',
        };
    });

    /**
     * Inicia el temporizador de tiempo límite para responder
     */
    function startQuestionTimer() {
        stopQuestionTimer();
        timeLeft.value = SECONDS_TO_ANSWER;

        countdownTimer = window.setInterval(() => {
            if (timeLeft.value > 0) {
                timeLeft.value--;
            } else {
                stopQuestionTimer();
                handleTimeout();
            }
        }, 1000);
    }

    function stopQuestionTimer() {
        if (countdownTimer !== null) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
    }

    /**
     * Inicia una nueva partida con 10 canciones aleatorias de las 20 disponibles
     */
    function startGame(name: string) {
        playerName.value = name.trim();
        score.value = 0;
        correctCount.value = 0;
        wrongCount.value = 0;
        timeoutCount.value = 0;
        totalListeningTime.value = 0;
        currentRoundIndex.value = 0;
        finalRankingPosition.value = null;

        // Seleccionamos 10 canciones aleatorias de las 20
        selectedQuestions.value = shuffleArray(songsData).slice(0, TOTAL_QUESTIONS_PER_GAME);
        gameStage.value = 'playing';

        loadRound(0);
    }

    /**
     * Prepara y reproduce la ronda indicada
     */
    function loadRound(index: number) {
        currentRoundIndex.value = index;
        selectedOptionId.value = null;
        answerStatus.value = 'idle';
        feedbackMessage.value = '';

        const question = currentQuestion.value;
        if (!question) {
            return;
        }

        // Barajamos aleatoriamente el orden de las 4 opciones
        currentShuffledOptions.value = shuffleArray(question.options);

        // Reproducimos automáticamente el fragmento de 5s
        audioStore.loadAndPlaySnippet(question.audioSrc);

        // Arrancamos el temporizador de respuesta
        startQuestionTimer();
    }

    /**
     * El usuario pulsa una de las 4 opciones de respuesta
     */
    function selectAnswer(option: AnswerOption) {
        // Si ya respondió o expiró el tiempo, ignorar clicks
        if (answerStatus.value !== 'idle') {
            return;
        }

        stopQuestionTimer();
        audioStore.pauseSnippet();
        totalListeningTime.value += audioStore.questionListeningTime;

        selectedOptionId.value = option.id;

        if (option.isCorrect) {
            answerStatus.value = 'correct';
            score.value += 10;
            correctCount.value++;
            feedbackMessage.value = '¡Correcto! Has acertado (+10 puntos)';
        } else {
            answerStatus.value = 'wrong';
            score.value = Math.max(0, score.value - 5);
            wrongCount.value++;
            feedbackMessage.value = '¡Has fallado! (-5 puntos)';
        }
    }

    /**
     * Se agota el tiempo sin contestar
     */
    function handleTimeout() {
        if (answerStatus.value !== 'idle') {
            return;
        }

        audioStore.pauseSnippet();
        totalListeningTime.value += audioStore.questionListeningTime;

        answerStatus.value = 'timeout';
        timeoutCount.value++;
        feedbackMessage.value = '¡Tiempo agotado! No has respondido a tiempo (+0 puntos)';
    }

    /**
     * Avanza a la siguiente pregunta o finaliza el juego
     */
    function nextQuestion() {
        audioStore.stopAndUnload();
        stopQuestionTimer();

        if (currentRoundIndex.value < TOTAL_QUESTIONS_PER_GAME - 1) {
            loadRound(currentRoundIndex.value + 1);
        } else {
            finishGame();
        }
    }

    /**
     * Finaliza la partida y la almacena en el ranking persistente
     */
    function finishGame() {
        stopQuestionTimer();
        audioStore.stopAndUnload();
        gameStage.value = 'ended';

        // Guardamos en el ranking persistente de localStorage
        const savedEntry = rankingStore.addEntry({
            playerName: playerName.value || 'Jugador',
            score: score.value,
            totalQuestions: TOTAL_QUESTIONS_PER_GAME,
            correctCount: correctCount.value,
            accuracy: accuracyPercentage.value,
            totalListeningTime: Math.round(totalListeningTime.value * 10) / 10,
        });

        // Guardamos la posición obtenida
        finalRankingPosition.value = rankingStore.getPosition(savedEntry.id);
    }

    /**
     * Reinicia el estado para volver a la pantalla de bienvenida o jugar de nuevo
     */
    function resetGame() {
        stopQuestionTimer();
        audioStore.stopAndUnload();
        gameStage.value = 'welcome';
        selectedOptionId.value = null;
        answerStatus.value = 'idle';
    }

    return {
        playerName,
        gameStage,
        currentRoundIndex,
        currentRoundNumber,
        selectedQuestions,
        currentQuestion,
        currentShuffledOptions,
        selectedOptionId,
        answerStatus,
        feedbackMessage,
        score,
        correctCount,
        wrongCount,
        timeoutCount,
        totalListeningTime,
        finalRankingPosition,
        timeLeft,
        progressPercentage,
        accuracyPercentage,
        performanceFeedback,
        startGame,
        selectAnswer,
        nextQuestion,
        resetGame,
    };
});