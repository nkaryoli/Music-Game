<script setup lang="ts">

interface Props {
    currentRound: number;
    totalRounds: number;
    progress: number;
    timeLeft: number;
    maxTime?: number;
}

const props = withDefaults(defineProps<Props>(), {
    maxTime: 15,
});

const timerBarColor = (): string => {
    if (props.timeLeft > 10) return 'bg-sonic-mint';
    if (props.timeLeft > 5) return 'bg-sonic-gold';
    return 'bg-sonic-crimson';
};

</script>

<template>
    <div class="flex flex-col gap-1.5">
        <div class="flex justify-between items-center">
            <span class="text-xs text-sonic-muted font-medium">
                Pregunta <strong class="text-white">{{ currentRound }}</strong> de {{ totalRounds }}
            </span>
            <span class="text-xs font-bold text-sonic-cyan">{{ progress }}% completado</span>
        </div>

        <div class="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div class="h-full rounded-full bg-linear-to-r from-sonic-fuchsia to-sonic-cyan transition-all duration-700 ease-out"
                :style="{ width: `${progress}%` }"></div>
        </div>

        <div class="w-full h-1 rounded-full bg-white/6 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000 linear" :class="timerBarColor()"
                :style="{ width: `${(timeLeft / maxTime) * 100}%` }"></div>
        </div>
    </div>
</template>

<style scoped></style>