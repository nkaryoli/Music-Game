<script setup lang="ts">

interface Props {
    timeLeft: number;
}

const props = defineProps<Props>();

const timerColor = (): string => {
    if (props.timeLeft > 10) return 'text-sonic-mint';
    if (props.timeLeft > 5) return 'text-sonic-gold';
    return 'text-sonic-crimson';
};

</script>

<template>
    <div class="flex items-center gap-2 glass-card rounded-full px-4 py-1.5 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0 transition-colors" :class="timerColor()"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
        <span class="text-sm font-extrabold tabular-nums transition-colors" :class="timerColor()">
            {{ timeLeft }}s restantes
        </span>
        <span v-if="timeLeft <= 5" class="text-[11px] text-sonic-crimson font-bold animate-pulse">
            ¡Apresúrate!
        </span>
    </div>
</template>

<style scoped></style>