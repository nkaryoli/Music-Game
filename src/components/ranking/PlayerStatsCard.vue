<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '@/stores/game'
import { useRankingStore } from '@/stores/ranking'
import { useAuthStore } from '@/stores/auth'
import AccuracyRing from './AccuracyRing.vue'

const gameStore = useGameStore()
const rankingStore = useRankingStore()
const authStore = useAuthStore()

const playerEntries = computed(() => {
  if (!authStore.isAuthenticated || !gameStore.playerName) return []
  return rankingStore.rankings.filter(
    (e) => e.playerName.toLowerCase() === gameStore.playerName.toLowerCase(),
  )
})

const hasPlayed = computed(() => playerEntries.value.length > 0)

const gamesPlayed = computed(() => playerEntries.value.length)

const bestScore = computed(() => {
  if (!hasPlayed.value) return 0
  return Math.max(...playerEntries.value.map((e) => e.score))
})

const globalRank = computed(() => {
  if (!hasPlayed.value) return null
  const positions = playerEntries.value.map((e) => rankingStore.getPosition(e.id))
  return Math.min(...positions)
})

const avgAccuracy = computed(() => {
  if (!hasPlayed.value) return 0
  const sum = playerEntries.value.reduce((acc, curr) => acc + curr.accuracy, 0)
  return Math.round(sum / playerEntries.value.length)
})

const avgCorrect = computed(() => {
  return Math.round((avgAccuracy.value / 100) * 10)
})

const avgTime = computed(() => {
  if (!hasPlayed.value) return 0
  const sum = playerEntries.value.reduce((acc, curr) => acc + curr.totalListeningTime, 0)
  return (sum / playerEntries.value.length).toFixed(1)
})
</script>

<template>
  <div class="bg-sonic-container-high/70 rounded-2xl p-6 pb-9 flex flex-col gap-5 shadow-xl w-full">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-sonic-soft-pink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h3 class="text-base font-bold text-white">Tus Estadísticas</h3>
      </div>

      <span
        v-if="authStore.isAuthenticated && gameStore.playerName"
        class="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-sonic-text font-medium"
      >
        {{ gameStore.playerName }}
      </span>
    </div>

    <div
      v-if="!hasPlayed"
      class="py-6 flex flex-col items-center gap-2 text-center text-sonic-muted text-xs"
    >
      <span class="text-2xl">🎮</span>
      <p>Juega al menos una partida para ver tu análisis de rendimiento aquí.</p>
    </div>

    <template v-else>
      <div class="bg-sonic-surface/80 rounded-[60px] px-5 py-4 flex items-center gap-4">
        <AccuracyRing :percentage="avgAccuracy" />
        <div class="flex flex-col">
          <span class="text-xs font-bold text-white">Tasa de Aciertos</span>
          <span class="text-sm font-semibold text-sonic-cyan">{{ avgCorrect }} de cada 10</span>
          <span class="text-[11px] text-sonic-muted">Promedio global personal</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2.5 text-xs">
        <div class="bg-sonic-surface/80 rounded-full px-5 py-3 flex flex-col gap-0.5">
          <span class="text-sonic-text">Mejor Marca</span>
          <div class="flex items-baseline gap-1">
            <span class="text-2xl font-semibold text-sonic-soft-pink">{{ bestScore }}</span>
            <span class="text-xs text-sonic-soft-pink">pts</span>
          </div>
        </div>

        <div class="bg-sonic-surface/80 rounded-full px-5 py-3 flex flex-col gap-0.5">
          <span class="text-sonic-text">Puesto Global</span>
          <span class="text-2xl font-semibold text-sonic-cyan">
            {{ globalRank ? `#${globalRank}` : '—' }}
          </span>
        </div>

        <div class="bg-sonic-surface/80 rounded-full px-5 py-3 flex flex-col gap-0.5">
          <span class="text-sonic-text">Partidas</span>
          <span class="text-2xl font-semibold text-white">{{ gamesPlayed }}</span>
        </div>

        <div class="bg-sonic-surface/80 flex flex-col gap-0.5 rounded-full p-3">
          <span class="text-sonic-text">Tiempo Prom.</span>
          <span class="text-2xl font-semibold text-white">{{ avgTime }}s</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
