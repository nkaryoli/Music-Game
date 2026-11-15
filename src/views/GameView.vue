<script setup lang="ts">
import { onMounted } from 'vue';
import { useGameStore } from '@/stores/game'
import { useAuthStore } from '@/stores/auth';
import GameActiveSection from '@/components/game/active/GameActiveSection.vue'
import GameResultsSection from '@/components/game/results/GameResultsSection.vue'

const gameStore = useGameStore()
const authStore = useAuthStore();

onMounted(() => {
  if (gameStore.gameStage === 'welcome' && authStore.isAuthenticated) {
    gameStore.startGame(authStore.currentUsername);
  }
});

function handlePlayAgain() {
  gameStore.resetGame()
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <Transition name="fade" mode="out-in">
      <GameActiveSection v-if="gameStore.gameStage === 'playing'" />
      <GameResultsSection
        v-else-if="gameStore.gameStage === 'ended'"
        :player-name="gameStore.playerName"
        :score="gameStore.score"
        :correct-count="gameStore.correctCount"
        :accuracy="gameStore.accuracyPercentage"
        :ranking-position="gameStore.finalRankingPosition"
        :performance-feedback="gameStore.performanceFeedback"
        @play-again="handlePlayAgain"
      />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
