<script lang="ts" setup>
import type { RankingEntry } from '@/types/game';
import PodiumCard from './PodiumCard.vue';

interface Props {
    podium: RankingEntry[];
    isCurrentPlayer: (name: string) => boolean;
}

defineProps<Props>();
</script>

<template>
    <div class="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <!-- 2º Puesto (Plata - Izquierda) -->
        <div v-if="podium[1]" class="order-2 md:order-1">
            <PodiumCard :entry="podium[1]" :rank="2" :is-current-player="isCurrentPlayer(podium[1].playerName)" />
        </div>

        <!-- 1º Puesto (Oro - Centro y elevado) -->
        <div v-if="podium[0]" class="order-1 md:order-2 md:-translate-y-3 md:scale-108 z-50">
            <PodiumCard :entry="podium[0]" :rank="1" :is-current-player="isCurrentPlayer(podium[0].playerName)" />
        </div>

        <!-- 3º Puesto (Bronce - Derecha) -->
        <div v-if="podium[2]" class="order-3">
            <PodiumCard :entry="podium[2]" :rank="3" :is-current-player="isCurrentPlayer(podium[2].playerName)" />
        </div>
    </div>
</template>

<style scoped></style>