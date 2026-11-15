<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth';
import AvatarComponent from './AvatarComponent.vue';

const authStore = useAuthStore();
const route = useRoute()

const currentPath = computed(() => route.path)
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center backdrop-blur-3xl shadow-lg shadow-sonic-bg/50 bg-sonic-surface/40 transition-all">
    <div class="flex items-center justify-between w-full max-w-7xl px-4 md:px-8 py-3.5">
      <RouterLink to="/" class="flex items-center gap-3 group">
        <div
          class="relative w-12 h-12 rounded-full bg-linear-to-br from-sonic-fuchsia to-sonic-violet p-0.5 shadow-lg shadow-sonic-fuchsia/30 group-hover:shadow-sonic-fuchsia/50 transition-all">
          <div class="w-full h-full bg-sonic-surface rounded-full flex items-center justify-center overflow-hidden">
            <img src="@/assets/logo2.png" alt=""
              class="w-12 text-sonic-fuchsia group-hover:scale-110 transition-transform" />
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span
            class="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-sonic-text transition-colors">
            Adivina la Canción
          </span>
          <span
            class="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-sonic-fuchsia/20 text-sonic-fuchsia border border-sonic-fuchsia/30">
            PRO
          </span>
        </div>
      </RouterLink>

      <nav class="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 p-1.5 rounded-full bg-sonic-surface backdrop-blur-md shadow-inner">
        <RouterLink to="/" class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300" :class="currentPath === '/'
          ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40'
          : 'text-sonic-muted hover:text-white hover:bg-white/6'
          ">
          Inicio
        </RouterLink>

        <RouterLink to="/play" class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
          :class="currentPath === '/play'
            ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40'
            : 'text-sonic-muted hover:text-white hover:bg-white/6'
            ">
          Jugar
        </RouterLink>

        <RouterLink to="/ranking" class="px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300"
          :class="currentPath === '/ranking'
            ? 'bg-linear-to-r from-sonic-fuchsia to-sonic-violet text-white shadow-md shadow-sonic-fuchsia/40'
            : 'text-sonic-muted hover:text-white hover:bg-white/6'
            ">
          Ranking
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <div v-if="authStore.isAuthenticated" class="flex items-center gap-3">
          <div
            class="hidden md:flex items-center gap-3 pr-4 border border-sonic-fuchsia/30 rounded-full bg-sonic-surface">
            <AvatarComponent variant="primary" size="sm" :glow="false"
              :src="authStore.currentAvatarPath"
              :label="authStore.currentUsername.charAt(0).toUpperCase()" />
            <span class="text-xs font-bold text-sonic-text truncate max-w-28">
              {{ authStore.currentUsername }}
            </span>
          </div>

          <button title="Cerrar Sesión"
            class="w-9 h-9 rounded-full sonic-white/5 hover:bg-sonic-crimson/20 border border-white/10 hover:border-sonic-crimson/40 text-sonic-muted hover:text-sonic-crimson flex items-center justify-center transition-all cursor-pointer"
            @click="authStore.logout()">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>

        <RouterLink v-else to="/login" class="btn-neon-primary px-5 py-2 text-sm shadow-md">
          Iniciar Sesión
        </RouterLink>

      </div>
    </div>
  </header>
</template>

<style scoped></style>
