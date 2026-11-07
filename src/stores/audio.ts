import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Howl } from 'howler';

const SNIPPET_DURATION = 5; // Duración obligatoria de 5 segundos

export const useAudioStore = defineStore('audio', () => {
    let sound: Howl | null = null;
    let progressInterval: number | null = null;

    // Estados reactivos
    const isPlaying = ref(false);
    const playbackProgress = ref(0); // De 0 a 5 segundos
    const volume = ref(0.8);
    const randomStartOffset = ref(0);
    const questionListeningTime = ref(0); // Tiempo escuchado en la pregunta actual
    let lastPlayStartTime: number | null = null;

    /**
     * Acumula el tiempo que el usuario estuvo escuchando
     */
    function recordListeningTime() {
        if (lastPlayStartTime !== null) {
            const elapsedSeconds = (performance.now() - lastPlayStartTime) / 1000;
            questionListeningTime.value += elapsedSeconds;
            lastPlayStartTime = null;
        }
    }

    /**
     * Monitorea el progreso continuo dentro de los 5 segundos del fragmento
     */
    function startProgressTracking() {
        stopProgressTracking();

        progressInterval = window.setInterval(() => {
            if (!sound || !sound.playing()) {
                return;
            }

            const currentSeek = typeof sound.seek() === 'number' ? sound.seek() : 0;
            const elapsedInSnippet = currentSeek - randomStartOffset.value;

            if (elapsedInSnippet >= SNIPPET_DURATION) {
                // Al alcanzar los 5 segundos, se detiene automáticamente
                playbackProgress.value = SNIPPET_DURATION;
                pauseSnippet();
            } else {
                playbackProgress.value = Math.max(0, elapsedInSnippet);
            }
        }, 50);
    }

    function stopProgressTracking() {
        if (progressInterval !== null) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }

    /**
     * Carga una canción y reproduce automáticamente un fragmento aleatorio de 5 segundos
     */
    function loadAndPlaySnippet(audioSrc: string) {
        stopAndUnload();
        questionListeningTime.value = 0;
        playbackProgress.value = 0;

        sound = new Howl({
            src: [audioSrc],
            html5: true,
            volume: volume.value,
            onload: () => {
                if (!sound) {
                    return;
                }

                const totalDuration = sound.duration() || 0;
                // Seleccionamos un inicio aleatorio con margen suficiente para los 5 segundos
                const maxStart = Math.max(0, totalDuration - SNIPPET_DURATION);
                randomStartOffset.value = Math.random() * maxStart;

                sound.seek(randomStartOffset.value);
                sound.play();
            },
            onplay: () => {
                isPlaying.value = true;
                lastPlayStartTime = performance.now();
                startProgressTracking();
            },
            onpause: () => {
                isPlaying.value = false;
                recordListeningTime();
                stopProgressTracking();
            },
            onstop: () => {
                isPlaying.value = false;
                recordListeningTime();
                stopProgressTracking();
            },
            onend: () => {
                isPlaying.value = false;
                recordListeningTime();
                stopProgressTracking();
            },
            onloaderror: (_id, error) => {
                console.error('Error al cargar audio:', audioSrc, error);
            },
        });
    }

    /**
     * Alterna entre reproducir y pausar el fragmento de 5 segundos
     */
    function togglePlay() {
        if (!sound) {
            return;
        }

        if (sound.playing()) {
            pauseSnippet();
        } else {
            // Si ya terminó los 5 segundos, volvemos al inicio del fragmento
            if (playbackProgress.value >= SNIPPET_DURATION) {
                sound.seek(randomStartOffset.value);
                playbackProgress.value = 0;
            }
            sound.play();
        }
    }

    function pauseSnippet() {
        if (sound && sound.playing()) {
            sound.pause();
        }
    }

    function setVolume(newVolume: number) {
        volume.value = Math.max(0, Math.min(1, newVolume));
        if (sound) {
            sound.volume(volume.value);
        }
    }

    /**
     * Detiene y descarga completamente el audio actual
     */
    function stopAndUnload() {
        stopProgressTracking();
        recordListeningTime();

        if (sound) {
            sound.stop();
            sound.unload();
            sound = null;
        }

        isPlaying.value = false;
        playbackProgress.value = 0;
    }

    return {
        isPlaying,
        playbackProgress,
        volume,
        questionListeningTime,
        loadAndPlaySnippet,
        togglePlay,
        pauseSnippet,
        setVolume,
        stopAndUnload,
    };
});