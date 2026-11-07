<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Detecta la ruta activa para aplicar el estilo de cápsula iluminada
const currentPath = computed(() => route.path);
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-3xl shadow-lg shadow-sonic-bg/50 bg-sonic-surface/40 transition-all">
    <div class="flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-3.5">

    <RouterLink to="/" class="flex items-center gap-3 group">
      <div class="relative w-12 h-12 rounded-full bg-linear-to-br from-sonic-fuchsia to-sonic-violet p-0.5 shadow-lg shadow-sonic-fuchsia/30 group-hover:shadow-sonic-fuchsia/50 transition-all">
        <div class="w-full h-full bg-sonic-surface rounded-full flex items-center justify-center overflow-hidden">
          <img src="@/assets/logo2.png" alt="" class="w-12 text-sonic-fuchsia group-hover:scale-110 transition-transform">
        </div>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-sonic-text transition-colors">
          Adivina la Canción
        </span>
        <span class="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-sonic-fuchsia/20 text-sonic-fuchsia border border-sonic-fuchsia/30">
          PRO
        </span>
      </div>
    </RouterLink>

    <nav class="hidden sm:flex items-center gap-1 p-1.5 rounded-full bg-sonic-surface  backdrop-blur-md shadow-inner">
      <RouterLink
        to="/"
        class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
        :class="currentPath === '/' 
          ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40' 
          : 'text-sonic-muted hover:text-white hover:bg-white/6'"
      >
        Inicio
      </RouterLink>

      <RouterLink
        to="/play"
        class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
        :class="currentPath === '/play' 
          ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40' 
          : 'text-sonic-muted hover:text-white hover:bg-white/6'"
      >
        Jugar
      </RouterLink>

      <RouterLink
        to="/ranking"
        class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
        :class="currentPath === '/ranking' 
          ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40' 
          : 'text-sonic-muted hover:text-white hover:bg-white/6'"
      >
        Ranking
      </RouterLink>
    </nav>

    <div class="flex items-center gap-3">
      <RouterLink
        to="/play"
        class="btn-neon-primary px-5 py-2 text-sm shadow-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M5 3l14 9-14 9V3z"/>
        </svg>
        <span>Jugar Partida</span>
      </RouterLink>
    </div>
    </div>
  </header>
</template>

<style scoped>
</style>