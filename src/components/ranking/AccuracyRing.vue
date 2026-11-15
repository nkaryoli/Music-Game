<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    percentage: number;
    radius?: number;
    strokeWidth?: number;
}

const props = withDefaults(defineProps<Props>(), {
    radius: 38,
    strokeWidth: 7,
});

const circumference = computed(() => 2 * Math.PI * props.radius);

const strokeDashoffset = computed(() => {
    const clamped = Math.max(0, Math.min(100, props.percentage));
    return circumference.value - (circumference.value * clamped) / 100;
});
</script>

<template>
    <div class="relative w-22 h-22 flex items-center justify-center shrink-0">
        <svg class="w-full h-full -rotate-90 transform" viewBox="0 0 96 96">
            <defs>
                <linearGradient id="accuracyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--color-sonic-fuchsia, #c026d3)" />
                    <stop offset="100%" stop-color="var(--color-sonic-cyan, #06b6d4)" />
                </linearGradient>
            </defs>

            <circle cx="48" cy="48" :r="radius" fill="none" stroke="rgba(255, 255, 255, 0.08)"
                :stroke-width="strokeWidth" />

            <circle cx="48" cy="48" :r="radius" fill="none" stroke="url(#accuracyGradient)" :stroke-width="strokeWidth"
                stroke-linecap="round" :stroke-dasharray="circumference" :stroke-dashoffset="strokeDashoffset"
                class="transition-all duration-1000 ease-out" />
        </svg>

        <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-extrabold text-white tracking-tight tabular-nums">
                {{ percentage }}%
            </span>
        </div>
    </div>
</template>

<style scoped></style>