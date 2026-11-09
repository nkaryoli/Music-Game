<script setup lang="ts">
import InstructionCard from './InstructionCard.vue'
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
    <div class="flex flex-col items-center text-center gap-4 mb-14">
      <span
        class="px-4 py-1.5 rounded-full glass-panel text-xs font-extrabold uppercase tracking-widest text-sonic-muted border border-white/10"
      >
        Mecánica de Juego
      </span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        ¿Cómo se juega Adivina la Canción?
      </h2>
      <p class="text-sonic-muted text-base">
        Tres sencillos pasos separan a un aficionado casual del auténtico maestro del ritmo.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InstructionCard
        step="01"
        title="Escucha"
        description="Escucha 5 segundos de una canción popular seleccionada al azar de los mayores hits globales y locales."
        tagline="Calidad de audio estéreo HD"
        variant="fuchsia"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path
              d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            />
          </svg>
        </template>
      </InstructionCard>
      <InstructionCard
        step="02"
        title="Adivina"
        description="Elige la respuesta correcta entre 4 opciones con título y artista antes de que el temporizador llegue a cero."
        tagline="Diseñado para reflejos instantáneos"
        variant="violet"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </template>
      </InstructionCard>
      <InstructionCard
        step="03"
        title="Compite"
        description="Gana 10 puntos por acierto, mantén tu racha intacta y sube a lo más alto de la tabla de clasificación."
        tagline="Clasificación actualizada en vivo"
        variant="cyan"
      >
        <template #icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
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
        </template>
      </InstructionCard>
    </div>
  </section>
</template>

<style scoped></style>
