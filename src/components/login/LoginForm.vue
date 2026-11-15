<script lang="ts" setup>
import { ref } from 'vue'
import { AVATAR_PATHS } from '@/stores/auth'

interface Props {
  label?: string
  placeholder?: string
  buttonText?: string
  maxLength?: number
}

withDefaults(defineProps<Props>(), {
  label: 'Tu nombre',
  placeholder: 'Ej: Javi, ElenaSound...',
  buttonText: 'Comenzar Juego',
  maxLength: 20,
})

const emit = defineEmits<{
  submit: [name: string, avatarPath: string]
}>()

const playerName = ref('')
const selectedAvatar = ref<string>(AVATAR_PATHS[0])

function handleSubmit() {
  const trimmed = playerName.value.trim()
  if (!trimmed) {
    return
  }
  emit('submit', trimmed, selectedAvatar.value)
}
</script>

<template>
  <form class="w-full flex flex-col gap-4" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-2 text-left">
      <label for="player-name" class="text-sm font-semibold uppercase tracking-wide">
        {{ label }}
      </label>
      <input
        id="player-name"
        v-model="playerName"
        type="text"
        :maxlength="maxLength"
        :placeholder="placeholder"
        autocomplete="off"
        class="w-full px-5 py-3.5 rounded-xl bg-white/6 border border-white/15 text-white placeholder-sonic-muted text-sm font-medium focus:outline-none focus:border-sonic-fuchsia/60 focus:bg-white/9 focus:shadow-[0_0_20px_rgba(192,38,211,0.2)] transition-all"
      />
    </div>

    <fieldset class="flex flex-col gap-3 text-left mt-2">
      <legend class="text-sm font-semibold uppercase tracking-wide">Elige tu avatar</legend>
      <div class="flex flex-wrap gap-3">
        <label
          v-for="(avatar, index) in AVATAR_PATHS"
          :key="avatar"
          class="relative cursor-pointer rounded-full p-1 mt-3 w-fit transition-all"
          :class="
            selectedAvatar === avatar
              ? 'bg-linear-to-tr from-sonic-fuchsia to-sonic-violet shadow-[0_0_20px_rgba(192,38,211,0.35)]'
              : 'bg-white/10 hover:bg-white/20'
          "
        >
          <input
            v-model="selectedAvatar"
            type="radio"
            name="avatar"
            :value="avatar"
            class="sr-only"
          />
          <img
            :src="avatar"
            :alt="`Avatar ${index + 1}`"
            class="aspect-square w-18 h-18 rounded-full object-cover"
          />
          <span class="sr-only">Avatar {{ index + 1 }}</span>
        </label>
      </div>
    </fieldset>

    <button
      type="submit"
      :disabled="!playerName.trim()"
      class="btn-neon-primary w-full py-4 text-base font-bold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
      {{ buttonText }}
    </button>
  </form>
</template>

<style scoped></style>
