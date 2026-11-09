<script setup lang="ts">
interface Props {
    isPlaying: boolean
    progress: number // 0 a 5 segundos
    volume: number // 0 a 1
}

defineProps<Props>()

const emit = defineEmits<{
    toggle: []
    'set-volume': [volume: number]
}>()

const SNIPPET_DURATION = 5

function onVolumeChange(event: Event) {
    const input = event.target as HTMLInputElement
    emit('set-volume', parseFloat(input.value))
}

function progressPercent(progress: number): number {
    return Math.min(100, (progress / SNIPPET_DURATION) * 100)
}
</script>

<template>
    <div class="glass-card rounded-3xl p-6 flex flex-col items-center gap-6 h-full">
        <!-- Badge Superior -->
        <div class="flex items-center gap-2 self-start">
            <span class="w-2 h-2 rounded-full animate-pulse"
                :class="isPlaying ? 'bg-sonic-fuchsia' : 'bg-sonic-muted'"></span>
            <span class="text-[11px] font-bold uppercase tracking-widest text-sonic-muted">Pista de Audio en Vivo</span>
        </div>

        <!-- Vinilo con Botón Play Central -->
        <div class="relative w-52 h-52 flex items-center justify-center">
            <!-- Anillos exteriores -->
            <div class="absolute inset-0 rounded-full border border-sonic-fuchsia/20"
                :class="isPlaying ? 'animate-pulse-ring' : ''"></div>
            <div class="absolute inset-3 rounded-full border border-sonic-violet/15"></div>
            <div class="absolute inset-6 rounded-full border border-white/[0.05]"></div>

            <!-- Resplandor de fondo cuando reproduce -->
            <div class="absolute inset-8 rounded-full blur-xl transition-opacity duration-500"
                :class="isPlaying ? 'bg-sonic-fuchsia/25 opacity-100' : 'opacity-0'"></div>

            <!-- Cuerpo del Vinilo -->
            <div
                class="relative w-40 h-40 rounded-full bg-gradient-to-b from-[#1e1430] to-[#0c0714] border border-white/10 flex items-center justify-center shadow-2xl">
                <!-- Surcos decorativos -->
                <div class="absolute inset-2 rounded-full border border-white/[0.03]"></div>
                <div class="absolute inset-5 rounded-full border border-white/[0.03]"></div>
                <div class="absolute inset-8 rounded-full border border-white/[0.03]"></div>

                <!-- Botón Play/Pausa Central -->
                <button
                    class="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center shadow-lg shadow-sonic-fuchsia/50 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-fuchsia/60"
                    @click="emit('toggle')">
                    <!-- Icono Play -->
                    <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 fill-white ml-0.5"
                        viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    <!-- Icono Pausa -->
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 fill-white" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                </button>

                <!-- Ecualizador animado (solo visible cuando reproduce) -->
                <div v-if="isPlaying" class="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-1 h-6">
                    <span class="w-1 rounded-full bg-sonic-cyan animate-[bounce_0.8s_infinite]"
                        style="height: 60%"></span>
                    <span class="w-1 rounded-full bg-sonic-fuchsia animate-[bounce_1.0s_infinite_0.1s]"
                        style="height: 100%"></span>
                    <span class="w-1 rounded-full bg-white animate-[bounce_0.9s_infinite_0.2s]"
                        style="height: 70%"></span>
                    <span class="w-1 rounded-full bg-sonic-violet animate-[bounce_1.2s_infinite_0.3s]"
                        style="height: 90%"></span>
                    <span class="w-1 rounded-full bg-sonic-cyan animate-[bounce_0.7s_infinite_0.4s]"
                        style="height: 50%"></span>
                </div>
            </div>
        </div>

        <!-- Barra de Progreso del Fragmento (5 segundos) -->
        <div class="w-full flex flex-col gap-2">
            <div class="flex justify-between text-xs text-sonic-muted font-medium tabular-nums">
                <span>{{ progress.toFixed(1) }}s</span>
                <span class="font-bold uppercase tracking-wider text-[11px]">Fragmento de Muestra</span>
                <span>5.0s MAX</span>
            </div>
            <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-sonic-fuchsia to-sonic-cyan transition-all duration-100"
                    :style="{ width: `${progressPercent(progress)}%` }"></div>
            </div>

            <!-- Botón Repetir -->
            <button
                class="self-center mt-1 flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-sonic-muted hover:text-white hover:border-white/20 transition-all"
                @click="emit('toggle')">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                </svg>
                Repetir Fragmento
            </button>
        </div>

        <!-- Control de Volumen -->
        <div class="w-full flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-sonic-muted shrink-0" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            </svg>
            <input type="range" min="0" max="1" step="0.05" :value="volume"
                class="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-sonic-fuchsia cursor-pointer"
                @input="onVolumeChange" />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-sonic-muted shrink-0" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
        </div>
    </div>
</template>

<style scoped></style>
