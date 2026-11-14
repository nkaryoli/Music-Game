<script setup lang="ts">
import AudioEqualizer from './player/AudioEqualizer.vue';
import SnippetProgressBar from './player/SnippetProgressBar.vue';
import VolumeControl from './player/VolumeControl.vue';

interface Props {
    isPlaying: boolean;
    progress: number;
    volume: number;
}

defineProps<Props>();

const emit = defineEmits<{
    toggle: [];
    'set-volume': [volume: number];
}>();
</script>

<template>
    <div class="glass-card rounded-3xl p-6 flex flex-col items-center gap-6 h-full">

        <div class="flex items-center gap-2 self-start">
            <span class="w-2 h-2 rounded-full animate-pulse"
                :class="isPlaying ? 'bg-sonic-fuchsia' : 'bg-sonic-muted'"></span>
            <span class="text-[11px] font-bold uppercase tracking-widest text-sonic-muted">
                Pista de Audio en Vivo
            </span>
        </div>

        <div class="relative w-52 h-52 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full border border-sonic-fuchsia/20"
                :class="isPlaying ? 'animate-pulse-ring' : ''"></div>
            <div class="absolute inset-3 rounded-full border border-sonic-violet/15"></div>
            <div class="absolute inset-6 rounded-full border border-white/5"></div>

            <div class="absolute inset-8 rounded-full blur-xl transition-opacity duration-500"
                :class="isPlaying ? 'bg-sonic-fuchsia/25 opacity-100' : 'opacity-0'"></div>

            <div
                class="relative w-40 h-40 rounded-full bg-linear-to-b from-[#1e1430] to-sonic-bg border border-white/10 flex items-center justify-center shadow-2xl">
                <div class="absolute inset-2 rounded-full border border-white/3"></div>
                <div class="absolute inset-5 rounded-full border border-white/3"></div>
                <div class="absolute inset-8 rounded-full border border-white/3"></div>
                <button
                    class="relative z-10 w-16 h-16 rounded-full bg-linear-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center shadow-lg shadow-sonic-fuchsia/50 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sonic-fuchsia/60 cursor-pointer"
                    @click="emit('toggle')">
                    <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 fill-white ml-0.5"
                        viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 fill-white" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                    </svg>
                </button>
                <AudioEqualizer v-if="isPlaying" />
            </div>
        </div>
        <SnippetProgressBar :progress="progress" @repeat="emit('toggle')" />
        <VolumeControl :volume="volume" @update:volume="emit('set-volume', $event)" />
    </div>
</template>

<style scoped></style>