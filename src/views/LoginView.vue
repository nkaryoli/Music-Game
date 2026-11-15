<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useGameStore } from '@/stores/game';
import IconCard from '@/components/IconCard.vue';
import RuleCard from '@/components/login/RuleCard.vue';
import LoginForm from '@/components/login/LoginForm.vue';

const router = useRouter();
const authStore = useAuthStore();
const gameStore = useGameStore();

function handleLoginSubmit(name: string, avatarPath: string) {
    // Guarda la sesión persistente en localStorage
    authStore.login(name, avatarPath);
    // Inicia la partida en el store de juego
    gameStore.startGame(name);
    // Redirige al juego
    router.push('/play');
}
</script>

<template>
    <div class="flex items-center justify-center min-h-[70vh] w-full px-4">
        <div
            class="bg-sonic-container-high/70 rounded-3xl p-8 sm:p-12 w-full max-w-3xl flex flex-col items-center gap-8 text-center shadow-2xl relative overflow-hidden">
            <IconCard variant="gradient" size="large">
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                </template>
            </IconCard>

            <div class="flex flex-col gap-2">
                <h1 class="text-4xl font-extrabold text-white">¡Bienvenido!</h1>
                <p class="text-sonic-text text-base sm:text-lg">
                    Escucha fragmentos de <strong class="text-white">5 segundos</strong> y adivina la canción.<br />
                    Tienes <strong class="text-white">15 segundos</strong> para responder cada pregunta.
                </p>
            </div>

            <!-- Tarjetas de reglas de puntuación -->
            <div class="w-full grid grid-cols-3 gap-3 text-center">
                <RuleCard title="+10" subtitle="Acierto" variant="fuchsia" />
                <RuleCard title="-5" subtitle="Fallo" variant="crimson" />
                <RuleCard title="+0" subtitle="Tiempo agotado" variant="gold" />
            </div>

            <!-- Formulario para ingresar el nombre -->
            <LoginForm @submit="handleLoginSubmit" />
        </div>
    </div>
</template>

<style scoped></style>
