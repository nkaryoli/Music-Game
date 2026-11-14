<script setup lang="ts">

interface Props {
    progress: number;
    maxDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    maxDuration: 5,
});

const emit = defineEmits<{
    repeat: [];
}>();

function progressPercent(): number {
    return Math.min(100, (props.progress / props.maxDuration) * 100);
}

</script>

<template>
    <div class="w-full flex flex-col gap-2">
        <div class="flex justify-between text-xs text-sonic-muted font-medium tabular-nums">
            <span>{{ progress.toFixed(1) }}s</span>
            <span class="font-bold uppercase tracking-wider text-[11px]">Fragmento de Muestra</span>
            <span>{{ maxDuration.toFixed(1) }}s MAX</span>
        </div>
        <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full rounded-full bg-linear-to-r from-sonic-fuchsia to-sonic-cyan transition-all duration-100"
                :style="{ width: `${progressPercent()}%` }"></div>
        </div>
        <button
            class="self-center mt-1 flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-sonic-muted hover:text-white hover:border-white/20 transition-all cursor-pointer"
            @click="emit('repeat')">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
            </svg>
            Repetir Fragmento
        </button>
    </div>
</template>

<style scoped></style>