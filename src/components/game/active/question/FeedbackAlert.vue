<script setup lang="ts">
import type { AnswerStatus } from '@/types/game';

interface Props {
    status: AnswerStatus;
    message: string;
}

defineProps<Props>();

</script>

<template>
    <Transition name="slide-up">
        <div v-if="status !== 'idle'" class="rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-semibold" :class="{
            'bg-sonic-mint/15 border border-sonic-mint/40 text-sonic-mint': status === 'correct',
            'bg-sonic-crimson/15 border border-sonic-crimson/40 text-sonic-crimson': status === 'wrong',
            'bg-sonic-gold/15 border border-sonic-gold/40 text-sonic-gold': status === 'timeout',
        }">
            <svg v-if="status === 'correct'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            <svg v-else-if="status === 'wrong'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0"
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
            <span>{{ message }}</span>
        </div>
    </Transition>
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