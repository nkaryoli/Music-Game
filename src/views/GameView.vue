<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import GameWelcome from '@/components/game/welcome/GameWelcome.vue'
import GameActive from '@/components/game/GameActive.vue'
// import GameResults from '@/components/game/GameResults.vue';

const gameStore = useGameStore()

function handleStartGame(name: string) {
  gameStore.startGame(name)
}

function handlePlayAgain() {
  gameStore.resetGame()
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <!-- Estado 1: Pantalla de Bienvenida -->
    <Transition name="fade" mode="out-in">
      <GameWelcome v-if="gameStore.gameStage === 'welcome'" @start-game="handleStartGame" />

      <!-- Estado 2: Juego Activo -->
      <GameActive v-else-if="gameStore.gameStage === 'playing'" />

      <!-- Estado 3: Pantalla de Resultados -->
      <GameResults
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
