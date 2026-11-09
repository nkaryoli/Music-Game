<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  'start-game': [name: string]
}>()

const playerName = ref('')

function handleSubmit() {
  const trimmed = playerName.value.trim()
  if (!trimmed) {
    return
  }
  emit('start-game', trimmed)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-[70vh]">
    <div
      class="glass-card rounded-3xl p-10 md:p-14 w-full max-w-md flex flex-col items-center gap-8 text-center shadow-2xl"
    >
      <!-- Icono Vinilo -->
      <div
        class="w-20 h-20 rounded-full bg-gradient-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center shadow-lg shadow-sonic-fuchsia/40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
          />
        </svg>
      </div>

      <!-- Texto -->
      <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-extrabold text-white">¡Bienvenido!</h1>
        <p class="text-sonic-muted text-sm leading-relaxed">
          Escucha fragmentos de <strong class="text-white">5 segundos</strong> y adivina la
          canción.<br />
          Tienes <strong class="text-white">15 segundos</strong> para responder cada pregunta.
        </p>
      </div>

      <!-- Reglas Rápidas -->
      <div class="w-full grid grid-cols-3 gap-3 text-center">
        <div class="glass-panel rounded-xl p-3 flex flex-col gap-1">
          <span class="text-xl font-extrabold text-sonic-fuchsia">+10</span>
          <span class="text-[11px] text-sonic-muted">Acierto</span>
        </div>
        <div class="glass-panel rounded-xl p-3 flex flex-col gap-1">
          <span class="text-xl font-extrabold text-sonic-crimson">-5</span>
          <span class="text-[11px] text-sonic-muted">Fallo</span>
        </div>
        <div class="glass-panel rounded-xl p-3 flex flex-col gap-1">
          <span class="text-xl font-extrabold text-sonic-gold">+0</span>
          <span class="text-[11px] text-sonic-muted">Tiempo agotado</span>
        </div>
      </div>

      <!-- Formulario de Nombre -->
      <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-2 text-left">
          <label
            for="player-name"
            class="text-sm font-semibold text-sonic-muted uppercase tracking-wide"
          >
            Tu nombre
          </label>
          <input
            id="player-name"
            v-model="playerName"
            type="text"
            maxlength="20"
            placeholder="Ej: Javi, ElenaSound..."
            autocomplete="off"
            class="w-full px-5 py-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-sonic-muted text-sm font-medium focus:outline-none focus:border-sonic-fuchsia/60 focus:bg-white/[0.09] focus:shadow-[0_0_20px_rgba(192,38,211,0.2)] transition-all"
          />
        </div>

        <button
          type="submit"
          :disabled="!playerName.trim()"
          class="btn-neon-primary w-full py-4 text-base font-bold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
          Comenzar Juego
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
