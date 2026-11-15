<script setup lang="ts">
import type { RankingEntry } from '@/types/game'
import AvatarComponent from '../AvatarComponent.vue'
import PointsCard from './PointsCard.vue'

interface Props {
  entry: RankingEntry
  rank: 1 | 2 | 3
  isCurrentPlayer?: boolean
}

withDefaults(defineProps<Props>(), {
  isCurrentPlayer: false,
})

const config: Record<
  1 | 2 | 3,
  {
    badge: string
    badgeBg: string
    glow: string
    medal: string
    avatarVariant: 'primary' | 'secondary' | 'tertiary'
    avatarSize: 'sm' | 'md' | 'lg'
  }
> = {
  1: {
    badge: 'Campeón',
    badgeBg: 'bg-sonic-soft-pink/20 text-sonic-soft-pink shadow-[0_0_20px_rgba(242,119,255,0.4)]',
    glow: 'shadow-[0_0_65px_rgba(242,119,255,0.4)]',
    medal: '👑',
    avatarVariant: 'primary',
    avatarSize: 'lg',
  },
  2: {
    badge: 'Segundo',
    badgeBg: 'bg-sonic-muted/20 text-sonic-cyan',
    glow: '',
    medal: '🥈',
    avatarVariant: 'secondary',
    avatarSize: 'md',
  },
  3: {
    badge: 'Tercero',
    badgeBg: 'bg-slate-300/20 text-purple-400',
    glow: '',
    medal: '🥉',
    avatarVariant: 'tertiary',
    avatarSize: 'md',
  },
}
</script>

<template>
  <div
    class="w-full max-w-md mx-auto bg-sonic-container-high/70 hover:bg-sonic-container-high/80 hover:scale-[103%] rounded-2xl p-6 flex flex-col items-center gap-4 text-center transition-all duration-300 relative overflow-hidden"
    :class="[config[rank].glow, isCurrentPlayer ? 'ring-2 ring-sonic-fuchsia' : '']"
  >
    <div
      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
      :class="config[rank].badgeBg"
    >
      <span>{{ config[rank].medal }}</span>
      <span>{{ config[rank].badge }}</span>
    </div>

    <AvatarComponent
      :variant="config[rank].avatarVariant"
      :size="config[rank].avatarSize"
      :src="entry.avatarPath"
      :label="entry.playerName.charAt(0).toUpperCase()"
    />

    <div class="flex flex-col items-center gap-0.5">
      <div class="flex items-center gap-2">
        <h3 class="text-2xl font-semibold text-white truncate max-w-37.5">
          {{ entry.playerName }}
        </h3>
        <span
          v-if="isCurrentPlayer"
          class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-sonic-fuchsia/20 text-sonic-fuchsia border border-sonic-fuchsia/40"
        >
          Tú
        </span>
      </div>
    </div>
    <PointsCard :entry="entry" />
  </div>
</template>

<style scoped></style>
