<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
    <div
      class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm"
    >
      <span class="w-2 h-2 rounded-full bg-sonic-fuchsia animate-ping"></span>
      <span class="text-xs font-bold tracking-wide uppercase text-sonic-muted">
        ¡Nuevo Juego! ¿Cuánto sabes de música?
      </span>
    </div>
    <h1
      class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] my-6"
    >
      Pon a prueba tu <br />
      <span class="bg-linear-to-r from-fuchsia-400 to-sonic-cyan bg-clip-text text-transparent">
        oído musical
      </span>
    </h1>
    <p class="text-base sm:text-md text-sonic-muted max-w-xl font-normal">
      Escucha fragmentos de 5 segundos y adivina la canción correcta entre 4 opciones. ¡Compite por
      las mejores puntuaciones con apasionados de la música de todo el mundo!
    </p>
  </div>
</template>

<style scoped></style>
