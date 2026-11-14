<script setup lang="ts">

interface Props {
    score: number;
}

defineProps<Props>();

</script>

<template>
    <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-sonic-gold shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" viewBox="0 0 24 24"
            fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span class="text-xl font-extrabold text-white tabular-nums">{{ score }}</span>
        <span class="text-xs text-sonic-muted font-medium">pts</span>
    </div>
</template>

<style scoped></style>