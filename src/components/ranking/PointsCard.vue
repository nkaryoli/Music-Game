<script setup lang="ts">
import type { RankingEntry } from '@/types/game';

interface Props {
    entry: RankingEntry;
}

defineProps<Props>();

</script>

<template>
    <div class="w-full bg-sonic-surface rounded-4xl pt-2 pb-4 px-6 space-y-1">
        <div class="flex justify-between items-end">
            <span class="text-xs text-sonic-muted">Puntuación</span>
            <div class="flex items-baseline gap-1">
                <span class="text-2xl font-bold text-sonic-soft-pink tabular-nums">{{ entry.score }}</span>
                <span class="text-xs text-sonic-muted font-medium">pts</span>
            </div>
        </div>

        <div class="w-full flex justify-between gap-2 border-white/5 text-xs">
            <span class="text-sonic-muted">Precisión</span>
            <span class="font-bold text-sonic-cyan">{{ entry.accuracy }}%</span>
        </div>

        <div class="w-full flex justify-between gap-2 border-white/5 text-xs">
            <span class="text-sonic-muted">Tiempo escucha</span>
            <span class="font-bold text-white">{{ entry.totalListeningTime }}s</span>
        </div>
    </div>
</template>

<style scoped></style>