<script lang="ts" setup>
import type { RankingEntry } from '@/types/game'
import RankingRow from './RankingRow.vue'

interface Props {
  entries: RankingEntry[]
  isCurrentPlayer: (name: string) => boolean
  startPosition?: number
}

withDefaults(defineProps<Props>(), {
  startPosition: 4,
})
</script>

<template>
  <div class="flex flex-col gap-2 mx-auto w-full lg:max-w-3xl">
    <div
      class="px-5 lg:pr-7 py-2 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-sonic-muted"
    >
      <div class="flex items-center gap-4">
        <span class="w-18">Posisión</span>
        <span>Jugador</span>
      </div>
      <div class="flex items-center gap-6">
        <span class="hidden sm:inline w-16 text-right">Precisión</span>
        <span class="hidden md:inline w-16 text-right">Tiempo</span>
        <span class="w-17.5 text-right">Puntos</span>
      </div>
    </div>
    <RankingRow
      v-for="(entry, index) in entries"
      :key="entry.id"
      :entry="entry"
      :position="index + 4"
      :is-current-player="isCurrentPlayer(entry.playerName)"
    />
  </div>
</template>

<style scoped></style>
