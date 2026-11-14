<script setup lang="ts">

interface Props {
    name: string;
    role?: string;
}

withDefaults(defineProps<Props>(), {
    role: 'Jugador',
});

</script>

<template>
    <div class="flex items-center gap-3">
        <div
            class="w-9 h-9 rounded-full bg-linear-to-tr from-sonic-fuchsia to-sonic-violet flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md shadow-sonic-fuchsia/30">
            {{ name.charAt(0).toUpperCase() }}
        </div>
        <div class="flex flex-col">
            <span class="font-bold text-white text-sm leading-none">{{ name }}</span>
            <span class="text-xs text-sonic-muted">{{ role }}</span>
        </div>
    </div>
</template>

<style scoped></style>