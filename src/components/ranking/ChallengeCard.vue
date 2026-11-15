<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRankingStore } from '@/stores/ranking'
import { useGameStore } from '@/stores/game'
import { useAuthStore } from '@/stores/auth'

const rankingStore = useRankingStore()
const gameStore = useGameStore()
const authStore = useAuthStore()

const thirdPlace = computed(() => rankingStore.top10[2] || null)

const firstPlace = computed(() => rankingStore.top10[0] || null)

const playerEntries = computed(() => {
  if (!authStore.isAuthenticated || !gameStore.playerName) return []
  return rankingStore.rankings.filter(
    (e) => e.playerName.toLowerCase() === gameStore.playerName.toLowerCase(),
  )
})

const bestScore = computed(() => {
  if (playerEntries.value.length === 0) return 0
  return Math.max(...playerEntries.value.map((e) => e.score))
})

const currentPlayerRank = computed(() => {
  if (playerEntries.value.length === 0) return null
  const positions = playerEntries.value.map((e) => rankingStore.getPosition(e.id))
  return Math.min(...positions)
})

const isAlreadyInPodium = computed(() => {
  return currentPlayerRank.value !== null && currentPlayerRank.value <= 3
})

const pointsNeeded = computed(() => {
  if (isAlreadyInPodium.value) {
    if (!firstPlace.value) return 0
    return Math.max(1, firstPlace.value.score - bestScore.value + 1)
  }

  if (!thirdPlace.value) return 10
  return Math.max(1, thirdPlace.value.score - bestScore.value + 1)
})

const targetPlayerName = computed(() => {
  if (isAlreadyInPodium.value) {
    return firstPlace.value ? firstPlace.value.playerName : 'el líder'
  }
  return thirdPlace.value ? thirdPlace.value.playerName : 'el podio'
})

const challengeTitle = computed(() => {
  if (!authStore.isAuthenticated) {
    return '¡El podio te espera!'
  }
  if (isAlreadyInPodium.value) {
    if (currentPlayerRank.value === 1) {
      return '¡Eres el Campeón! 👑'
    }
    return `Supera a ${targetPlayerName.value} (#1)`
  }
  if (!thirdPlace.value) {
    return '¡El podio te espera!'
  }
  return `Supera a ${targetPlayerName.value} (#3)`
})

const challengeDescription = computed(() => {
  if (!authStore.isAuthenticated) {
    return 'Inicia sesión y juega una partida para competir por un puesto en el ranking.'
  }
  if (currentPlayerRank.value === 1) {
    return 'Defiende tu corona jugando otra partida y marcando un nuevo récord imbatible.'
  }
  if (isAlreadyInPodium.value) {
    return `Solo necesitas ${pointsNeeded.value} puntos adicionales para alcanzar el 1.º puesto y coronarte campeón.`
  }
  if (!thirdPlace.value) {
    return 'Aún hay huecos libres en el podio. Juega una partida de 10 canciones y asegura tu trofeo hoy mismo.'
  }
  return `Solo necesitas ${pointsNeeded.value} puntos adicionales en una sola partida de 10 canciones para arrebatarle el bronce hoy mismo.`
})
</script>

<template>
  <div
    class="bg-sonic-container-high/70 p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden"
  >
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-sonic-fuchsia animate-ping"></span>
      <span class="text-[11px] font-extrabold uppercase tracking-wider text-sonic-muted">
        Modo Reto Disponible
      </span>
    </div>

    <div class="flex flex-col gap-1.5">
      <h4 class="text-base font-bold text-white">
        {{ challengeTitle }}
      </h4>
      <p class="text-xs text-sonic-muted leading-relaxed">
        {{ challengeDescription }}
      </p>
    </div>

    <RouterLink
      to="/play"
      class="btn-neon-primary w-full py-3 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
      Desafiar Puntuación
    </RouterLink>
  </div>
</template>

<style scoped></style>
