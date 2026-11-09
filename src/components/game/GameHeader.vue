<script setup lang="ts">
interface Props {
    playerName: string
    score: number
    currentRound: number
    totalRounds: number
    progress: number
    timeLeft: number
}

const props = defineProps<Props>()

// El temporizador cambia de color: verde → amarillo → rojo
const timerColor = (): string => {
    if (props.timeLeft > 10) return 'text-sonic-mint'
    if (props.timeLeft > 5) return 'text-sonic-gold'
    return 'text-sonic-crimson'
}

const timerBarColor = (): string => {
    if (props.timeLeft > 10) return 'bg-sonic-mint'
    if (props.timeLeft > 5) return 'bg-sonic-gold'
    return 'bg-sonic-crimson'
}
</script>

<template>
    <div class="glass-panel rounded-2xl px-6 py-4 flex flex-col gap-3">
        <!-- Fila Superior: Jugador, Tiempo y Puntuación -->
        <div class="flex items-center justify-between gap-4">
            <!-- Jugador -->
            <div class="flex items-center gap-3">
                <div
                    class="w-9 h-9 rounded-full bg-gradient-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {{ playerName.charAt(0).toUpperCase() }}
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-white text-sm leading-none">{{ playerName }}</span>
                    <span class="text-xs text-sonic-muted">Jugador</span>
                </div>
            </div>

            <!-- Temporizador de Respuesta -->
            <div class="flex items-center gap-2 glass-card rounded-full px-4 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" :class="timerColor()"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                <span class="text-sm font-extrabold tabular-nums" :class="timerColor()">
                    {{ timeLeft }}s restantes
                </span>
                <span v-if="timeLeft <= 5" class="text-[11px] text-sonic-crimson font-bold animate-pulse">
                    ¡Apresúrate!
                </span>
            </div>

            <!-- Puntuación -->
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sonic-gold shrink-0" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span class="text-xl font-extrabold text-white tabular-nums">{{ score }}</span>
                <span class="text-xs text-sonic-muted">pts</span>
            </div>
        </div>

        <!-- Fila Inferior: Barra de Progreso -->
        <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
                <span class="text-xs text-sonic-muted font-medium">
                    Pregunta <strong class="text-white">{{ currentRound }}</strong> de {{ totalRounds }}
                </span>
                <span class="text-xs font-bold text-sonic-cyan">{{ progress }}% completado</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-sonic-fuchsia to-sonic-cyan transition-all duration-700 ease-out"
                    :style="{ width: `${progress}%` }"></div>
            </div>
            <!-- Barra del temporizador -->
            <div class="w-full h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <div class="h-full rounded-full transition-all duration-1000 linear" :class="timerBarColor()"
                    :style="{ width: `${(timeLeft / 15) * 100}%` }"></div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
