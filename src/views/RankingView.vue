<script setup lang="ts">
import { computed } from 'vue';
import { useRankingStore } from '@/stores/ranking';
import { useGameStore } from '@/stores/game';
import RankingEmpty from '@/components/ranking/RankingEmpty.vue';
import PodiumComponent from '@/components/ranking/PodiumComponent.vue';
import RankingHeader from '@/components/ranking/RankingHeader.vue';
import PlayerStatsCard from '@/components/ranking/PlayerStatsCard.vue';
import RankingTable from '@/components/ranking/RankingTable.vue';
import ChallengeCard from '@/components/ranking/ChallengeCard.vue';

const rankingStore = useRankingStore();
const gameStore = useGameStore();

const top10 = computed(() => rankingStore.top10);
const podium = computed(() => top10.value.slice(0, 3));
const restOfTop10 = computed(() => top10.value.slice(3, 10));

function isCurrentPlayer(entryName: string): boolean {
  return !!gameStore.playerName && entryName.toLowerCase() === gameStore.playerName.toLowerCase();
}

</script>

<template>
  <div class="w-full max-w-7xl mx-auto py-8 flex flex-col gap-16 lg:gap-20 px-4 sm:px-6 lg:px-8 ">
    <RankingHeader />
    <RankingEmpty v-if="top10.length === 0" />

    <div class="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-5 gap-6 w-full">
      <div class="lg:col-span-4 xl:col-span-3 space-y-9">
        <PodiumComponent :podium="podium" :is-current-player="isCurrentPlayer" />
        <RankingTable v-if="restOfTop10.length > 0" :entries="restOfTop10" :is-current-player="isCurrentPlayer" />
      </div>
      <div class="w-full lg:col-span-2 space-y-9">
        <PlayerStatsCard />
        <ChallengeCard />
      </div>
    </div>
  </div>
</template>

<style scoped></style>