<script setup lang="ts">

interface Props {
    volume: number;
}

defineProps<Props>();

const emit = defineEmits<{
    'update:volume': [volume: number];
}>();

function onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    emit('update:volume', parseFloat(input.value));
}

</script>

<template>
    <div class="w-full flex items-center gap-3">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="w-4 h-4 text-sonic-muted shrink-0" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        </svg>
        <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            :value="volume"
            class="w-full h-1.5 rounded-full appearance-none bg-white/10 accent-sonic-fuchsia cursor-pointer"
            @input="onInput" 
        />
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="w-4 h-4 text-sonic-muted shrink-0" 
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor" 
            stroke-width="2"
        >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    </div>
</template>

<style scoped></style>