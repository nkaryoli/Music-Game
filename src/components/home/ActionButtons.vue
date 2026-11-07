<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
        <RouterLink to="/play"
            class="btn-neon-primary-cyan px-8 py-4.5 text-sm tracking-wider shadow-xl shadow-sonic-fuchsia/25 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
            </svg>
            <span>Comenzar a Jugar</span>
        </RouterLink>
        <RouterLink to="/ranking"
            class="btn-glass-secondary px-8 py-4.5 text-sm tracking-wider active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sonic-cyan" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <span>Ver Ranking</span>
        </RouterLink>
    </div>
</template>

<style scoped>
</style>