<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="glass-card rounded-3xl p-10 md:p-16 flex flex-col items-center gap-6 text-center max-w-lg mx-auto"
  >
    <div
      class="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-inner"
    >
      🏆
    </div>
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-extrabold text-white">Aún no hay puntuaciones</h2>
      <p class="text-sonic-muted text-sm max-w-sm">
        ¡Sé el primero en demostrar tus conocimientos musicales y reclamar el primer puesto del
        ranking!
      </p>
    </div>
    <RouterLink to="/play" class="btn-neon-primary px-8 py-3.5 text-base font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
      Jugar Ahora
    </RouterLink>
  </div>
</template>

<style scoped></style>
