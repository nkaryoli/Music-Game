<script setup lang="ts">
import type { SongQuestion, AnswerOption, AnswerStatus } from '@/types/game';
import AnswerOptionComponent from './question/AnswerOption.vue';
import FeedbackAlert from './question/FeedbackAlert.vue';

interface Props {
    question: SongQuestion;
    shuffledOptions: AnswerOption[];
    selectedOptionId: string | null;
    answerStatus: AnswerStatus;
    feedbackMessage: string;
}

defineProps<Props>();

const emit = defineEmits<{
    'answer-selected': [option: AnswerOption];
    next: [];
}>();

const LETTERS = ['A', 'B', 'C', 'D'];

</script>

<template>
    <div class="glass-card rounded-3xl p-6 flex flex-col gap-5 h-full">

        <div class="flex flex-col gap-1">
            <span class="text-xs font-extrabold uppercase tracking-widest text-sonic-fuchsia">
                Ronda de Velocidad • Valor: 10 Puntos
            </span>
            <h2 class="text-2xl font-extrabold text-white">
                {{ question.questionText }}
            </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AnswerOptionComponent v-for="(option, index) in shuffledOptions" :key="option.id" :option="option"
                :option-letter="LETTERS[index] ?? '?'" :selected-option-id="selectedOptionId"
                :answer-status="answerStatus" @selected="emit('answer-selected', $event)" />
        </div>

        <FeedbackAlert :status="answerStatus" :message="feedbackMessage" />

        <Transition name="slide-up">
            <button v-if="answerStatus !== 'idle'"
                class="btn-neon-primary w-full py-3.5 text-base font-bold cursor-pointer" @click="emit('next')">
                Siguiente Pregunta
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>
        </Transition>
    </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}
</style>