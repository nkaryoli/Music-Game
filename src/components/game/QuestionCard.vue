<script setup lang="ts">
import type { SongQuestion, AnswerOption, AnswerStatus } from '@/types/game'
import AnswerOptionComponent from './AnswerOption.vue'

interface Props {
    question: SongQuestion
    shuffledOptions: AnswerOption[]
    selectedOptionId: string | null
    answerStatus: AnswerStatus
    feedbackMessage: string
}

defineProps<Props>()

const emit = defineEmits<{
    'answer-selected': [option: AnswerOption]
    next: []
}>()

const LETTERS = ['A', 'B', 'C', 'D']
</script>

<template>
    <div class="glass-card rounded-3xl p-6 flex flex-col gap-5 h-full">
        <!-- Cabecera de la Pregunta -->
        <div class="flex flex-col gap-1">
            <span class="text-xs font-extrabold uppercase tracking-widest text-sonic-fuchsia">
                Ronda de Velocidad • Valor: 10 Puntos
            </span>
            <h2 class="text-2xl font-extrabold text-white">
                {{ question.questionText }}
            </h2>
        </div>

        <!-- Opciones de Respuesta (4 Botones) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow">
            <AnswerOptionComponent v-for="(option, index) in shuffledOptions" :key="option.id" :option="option"
                :option-letter="LETTERS[index] ?? '?'" :selected-option-id="selectedOptionId"
                :answer-status="answerStatus" @selected="emit('answer-selected', $event)" />
        </div>

        <!-- Mensaje de Feedback (Visible tras responder) -->
        <Transition name="slide-up">
            <div v-if="answerStatus !== 'idle'"
                class="rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold" :class="{
                    'bg-sonic-mint/15 border border-sonic-mint/40 text-sonic-mint':
                        answerStatus === 'correct',
                    'bg-sonic-crimson/15 border border-sonic-crimson/40 text-sonic-crimson':
                        answerStatus === 'wrong',
                    'bg-sonic-gold/15 border border-sonic-gold/40 text-sonic-gold':
                        answerStatus === 'timeout',
                }">
                <!-- Icono de Feedback -->
                <svg v-if="answerStatus === 'correct'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
                <svg v-else-if="answerStatus === 'wrong'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{{ feedbackMessage }}</span>
            </div>
        </Transition>

        <!-- Botón Siguiente Pregunta (Visible tras responder) -->
        <Transition name="slide-up">
            <button v-if="answerStatus !== 'idle'" class="btn-neon-primary w-full py-3.5 text-base font-bold"
                @click="emit('next')">
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
