<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ResultStatCard from './ResultStatCard.vue';

interface Props {
    playerName: string;
    score: number;
    correctCount: number;
    accuracy: number;
    rankingPosition: number | null;
    performanceFeedback: {
        title: string;
        subtitle: string;
    };
}

defineProps<Props>();

const emit = defineEmits<{
    'play-again': [];
}>();
</script>

<template>
    <div class="flex items-center justify-center min-h-[70vh] py-6">
        <div
            class="glass-card rounded-3xl p-8 md:p-12 w-full max-w-xl flex flex-col items-center gap-7 text-center shadow-2xl relative overflow-hidden">
            <!-- Luces ambientales de fondo -->
            <div
                class="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-sonic-fuchsia/25 blur-3xl">
            </div>
            <div
                class="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-sonic-cyan/20 blur-3xl">
            </div>

            <!-- Icono de Trofeo Central -->
            <div
                class="relative w-20 h-20 rounded-full bg-linear-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center shadow-lg shadow-sonic-fuchsia/40">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-sonic-gold drop-shadow-md"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            <!-- Mensaje de Feedback -->
            <div class="flex flex-col gap-1.5">
                <h2 class="text-3xl font-extrabold text-white">
                    {{ performanceFeedback.title }}
                </h2>
                <p class="text-sonic-muted text-sm max-w-md">
                    {{ performanceFeedback.subtitle }}
                </p>
            </div>

            <!-- Puntuación Principal -->
            <div
                class="glass-panel w-full rounded-2xl py-6 px-4 flex flex-col items-center gap-1 border border-white/10">
                <span class="text-xs uppercase tracking-widest text-sonic-muted font-bold">
                    Puntuación Final
                </span>
                <span class="text-5xl font-extrabold text-white tabular-nums">
                    {{ score }}
                </span>
                <span class="text-xs text-sonic-muted font-medium">de 100 puntos posibles</span>
            </div>

            <!-- Métricas: Aciertos y Precisión -->
            <div class="grid grid-cols-2 gap-3 w-full">
                <ResultStatCard :value="`${correctCount}/10`" label="Aciertos" variant="mint">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </template>
                </ResultStatCard>

                <ResultStatCard :value="`${accuracy}%`" label="Precisión" variant="cyan">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" />
                            <circle cx="12" cy="12" r="2" />
                        </svg>
                    </template>
                </ResultStatCard>
            </div>

            <!-- Tarjeta de Posición en el Ranking -->
            <div v-if="rankingPosition"
                class="glass-panel w-full rounded-2xl p-4 flex items-center justify-between border border-sonic-fuchsia/30 shadow-[0_0_20px_rgba(192,38,211,0.15)]">
                <div class="flex items-center gap-3">
                    <span class="text-lg">🏆</span>
                    <div class="flex flex-col text-left">
                        <span class="text-sm font-bold text-white flex items-center gap-2">
                            {{ playerName }}
                            <span
                                class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-sonic-fuchsia/20 text-sonic-fuchsia border border-sonic-fuchsia/40">
                                Tú
                            </span>
                        </span>
                        <span class="text-xs text-sonic-muted">
                            Puesto #{{ rankingPosition }} en la tabla global
                        </span>
                    </div>
                </div>

                <span class="text-xs font-bold px-3 py-1 rounded-full" :class="rankingPosition <= 10
                        ? 'bg-sonic-mint/20 text-sonic-mint border border-sonic-mint/30'
                        : 'bg-white/10 text-sonic-muted'
                    ">
                    {{ rankingPosition <= 10 ? '¡Top 10!' : 'Sigue practicando' }} </span>
            </div>

            <!-- Botones de Acción -->
            <div class="flex flex-col sm:flex-row gap-3 w-full pt-2">
                <button class="btn-neon-primary flex-1 py-4 text-base font-bold cursor-pointer"
                    @click="emit('play-again')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                        <path d="M3 3v5h5" />
                    </svg>
                    Jugar de Nuevo
                </button>

                <RouterLink to="/ranking" class="btn-glass-secondary flex-1 py-4 text-base font-semibold text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sonic-gold" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                    Ver en el Ranking
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>