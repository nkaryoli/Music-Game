<script setup lang="ts">
import type { RankingEntry } from '@/types/game'
import AvatarComponent from '../AvatarComponent.vue'

interface Props {
  entry: RankingEntry
  position: number
  isCurrentPlayer?: boolean
}

withDefaults(defineProps<Props>(), {
  isCurrentPlayer: false,
})
</script>

<template>
  <div
    class="relative bg-sonic-container-high/50 rounded-2xl px-5 lg:px-7 py-3.5 flex items-center justify-between gap-4 transition-all hover:bg-sonic-container-high/80"
    :class="isCurrentPlayer ? 'scale-[101%]' : ''"
  >
    <div
      v-if="isCurrentPlayer"
      class="absolute w-full inset-0 rounded-2xl bg-linear-to-r from-sonic-fuchsia/30 via-sonic-container-high/50 to-sonic-violet/30 backdrop-blur-xl shadow-[0_0_30px_rgba(192,38,211,0.35)] scale-[1.01] transition-all"
    >
      <div
        class="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-sonic-soft-pink shadow-[0_0_12px_#fda9ff]"
      ></div>
    </div>
    <div class="flex items-center gap-4 min-w-0 z-50">
      <span class="w-4 text-start font-extrabold tabular-nums">
        {{ position }}
      </span>

      <AvatarComponent
        :variant="isCurrentPlayer ? 'secondary' : 'tertiary'"
        size="sm"
        :glow="isCurrentPlayer"
        :src="entry.avatarPath"
        :label="entry.playerName.charAt(0).toUpperCase()"
      />

      <div class="flex flex-col min-w-0">
        <div class="flex items-center gap-2">
          <span class="font-bold text-white text-sm truncate">{{ entry.playerName }}</span>
          <span
            v-if="isCurrentPlayer"
            class="px-2 py-0.5 rounded-full text-[11px] font-extrabold uppercase bg-sonic-soft-pink text-fuchsia-900"
          >
            Tú
          </span>
        </div>
        <span
          class="text-xs"
          :class="isCurrentPlayer ? 'text-sonic-soft-pink text-bold' : 'text-sonic-muted'"
          >{{ entry.date }}</span
        >
      </div>
    </div>

    <div class="flex items-center gap-6 shrink-0 text-center z-50">
      <div class="hidden sm:inline w-16 text-xs">
        <!-- <span class="text-sonic-muted">Precisión</span> -->
        <span class="font-bold text-sonic-cyan">{{ entry.accuracy }}%</span>
      </div>

      <div class="hidden md:inline w-16 text-xs">
        <!-- <span class="text-sonic-muted">Tiempo</span> -->
        <span class="font-bold text-white">{{ entry.totalListeningTime }}s</span>
      </div>

      <div class="flex justify-end items-baseline gap-1 w-17.5 min-w-17.5">
        <span class="text-xl font-semibold text-white tabular-nums">{{ entry.score }}</span>
        <span class="text-xs text-sonic-muted">pts</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
