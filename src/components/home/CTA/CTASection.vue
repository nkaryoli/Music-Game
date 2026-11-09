<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

    <div
      class="relative overflow-hidden rounded-3xl glass-card p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
    >

      <div class="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-sonic-fuchsia/20 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-sonic-violet/20 blur-3xl"></div>

      <div class="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-4">

        <span
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sonic-fuchsia/15 border border-sonic-fuchsia/30 text-sonic-fuchsia text-xs font-extrabold uppercase tracking-widest"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-sonic-fuchsia animate-ping"></span>
          ¡Tu turno en el escenario!
        </span>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-lg">
          ¿Listo para el desafío musical?
        </h2>

        <p class="text-sonic-muted text-base max-w-md leading-relaxed">
          Demuestra que no hay canción que se te escape. Conecta tus auriculares y pon a vibrar tus
          conocimientos.
        </p>
      </div>

      <div class="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <RouterLink
          to="/play"
          class="btn-neon-primary px-8 py-4 text-base font-bold shadow-xl shadow-sonic-fuchsia/30 w-full sm:w-auto hover:scale-105 active:scale-95 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M13 10h7l-9 13v-9H4l9-13v9z" />
          </svg>
          <span>Empezar Ahora</span>
        </RouterLink>

        <RouterLink
          to="/ranking"
          class="btn-glass-secondary px-8 py-4 text-base font-semibold w-full sm:w-auto hover:scale-105 active:scale-95 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
          <span>Ver Salón de la Fama →</span>
        </RouterLink>
      </div>
    </div>

    <div
      class="mt-12 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sonic-muted"
    >
      <span>© 2025 Adivina la Canción. Experiencia interactiva de trivia musical.</span>
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-sonic-mint animate-pulse"></span>
        <span>Efectos de sonido: <strong class="text-sonic-mint">Activos</strong></span>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
