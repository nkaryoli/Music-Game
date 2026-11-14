<script setup lang="ts">
import RuleCard from './RuleCard.vue'
import IconCard from '../../IconCard.vue';
import LoginForm from './LoginForm.vue';

const emit = defineEmits<{
  'start-game': [name: string]
}>()


function handleFormSubmit(name: string) {
  emit('start-game', name);
}

</script>

<template>
  <div class="flex items-center justify-center min-h-[70vh]">
    <div class="glass-card rounded-3xl p-10 md:p-14 w-full max-w-3xl flex flex-col items-center gap-8 text-center shadow-2xl"   >
      <IconCard  variant="gradient" size="large">
        <template #icon>
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
        </template>
      </IconCard>
    

      <div class="flex flex-col gap-2">
        <h1 class="text-4xl font-extrabold text-white">¡Bienvenido!</h1>
        <p class="text-sonic-text text-lg ">
          Escucha fragmentos de <strong class="text-white">5 segundos</strong> y adivina la
          canción.<br />
          Tienes <strong class="text-white">15 segundos</strong> para responder cada pregunta.
        </p>
      </div>

      <div class="w-full grid grid-cols-3 gap-3 text-center">
        <RuleCard title="+10" subtitle="Acierto" variant="fuchsia" />
        <RuleCard title="-5" subtitle="Fallo" variant="crimson" />
        <RuleCard title="+0" subtitle="Tiempo agotado" variant="gold" />
      </div>

      <LoginForm @submit="handleFormSubmit" />
    </div>
  </div>
</template>

<style scoped></style>
