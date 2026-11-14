<script setup lang="ts">
import type { AnswerOption, AnswerStatus } from '@/types/game'

interface Props {
    option: AnswerOption
    optionLetter: string // 'A', 'B', 'C', 'D'
    selectedOptionId: string | null
    answerStatus: AnswerStatus
}

const props = defineProps<Props>()

const emit = defineEmits<{
    selected: [option: AnswerOption]
}>()

const isSelected = (): boolean => props.selectedOptionId === props.option.id
const isAnswered = (): boolean => props.answerStatus !== 'idle'


const cardClasses = (): string => {
    if (!isAnswered()) {
        return 'glass-panel border-white/10 hover:border-sonic-fuchsia/50 hover:bg-white/[0.08] cursor-pointer hover:scale-[1.01] active:scale-[0.99]'
    }
    if (props.option.isCorrect) {
        return 'bg-sonic-mint/15 border-sonic-mint/60 glow-success cursor-default'
    }
    if (isSelected() && !props.option.isCorrect) {
        return 'bg-sonic-crimson/15 border-sonic-crimson/60 glow-error cursor-default'
    }
    return 'glass-panel border-white/[0.05] opacity-40 cursor-default'
}

</script>

<template>
    <button
        class="w-full max-h-20 rounded-2xl border p-4 flex items-center gap-4 text-left transition-all duration-250 focus:outline-none"
        :class="cardClasses()" :disabled="isAnswered()" @click="emit('selected', option)">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 transition-colors"
            :class="isAnswered() && option.isCorrect
                    ? 'bg-sonic-mint text-white'
                    : isAnswered() && isSelected() && !option.isCorrect
                        ? 'bg-sonic-crimson text-white'
                        : 'bg-white/8 text-sonic-muted'
                ">
            {{ optionLetter }}
        </div>
        <span class="font-semibold text-sm text-white grow leading-snug">
            {{ option.text }}
        </span>
        <div class="shrink-0 w-5 h-5">
            <svg v-if="isAnswered() && option.isCorrect" xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-sonic-mint" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg v-else-if="isAnswered() && isSelected() && !option.isCorrect" xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-sonic-crimson" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </div>
    </button>
</template>

<style scoped></style>
