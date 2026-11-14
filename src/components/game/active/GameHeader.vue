<script setup lang="ts">
import PlayerBadge from './header/PlayerBadge.vue';
import TimerBadge from './header/TimerBadge.vue';
import ScoreBadge from './header/ScoreBadge.vue';
import ProgressBar from './header/ProgressBar.vue';

interface Props {
    playerName: string;
    score: number;
    currentRound: number;
    totalRounds: number;
    progress: number;
    timeLeft: number;
}

defineProps<Props>();

</script>

<template>
    <div class="glass-panel rounded-2xl px-6 py-4 flex flex-col gap-3">
        <div class="flex items-center justify-between gap-4">
            <PlayerBadge :name="playerName" />
            <TimerBadge :time-left="timeLeft" />
            <ScoreBadge :score="score" />
        </div>
        <ProgressBar :current-round="currentRound" :total-rounds="totalRounds" :progress="progress" :time-left="timeLeft" />
    </div>
</template>

<style scoped></style>