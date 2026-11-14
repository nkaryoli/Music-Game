<script setup lang="ts">
type ColorVariant = 'mint' | 'cyan' | 'fuchsia';

interface Props {
    value: string | number;
    label: string;
    variant?: ColorVariant;
}

withDefaults(defineProps<Props>(), {
    variant: 'mint',
});

const variantStyles: Record<ColorVariant, { bg: string; text: string; border: string }> = {
    mint: {
        bg: 'bg-sonic-mint/10',
        text: 'text-sonic-mint',
        border: 'border-sonic-mint/20',
    },
    cyan: {
        bg: 'bg-sonic-cyan/10',
        text: 'text-sonic-cyan',
        border: 'border-sonic-cyan/20',
    },
    fuchsia: {
        bg: 'bg-sonic-fuchsia/10',
        text: 'text-sonic-fuchsia',
        border: 'border-sonic-fuchsia/20',
    },
};

</script>

<template>
    <div class="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center gap-1 border transition-all"
        :class="variantStyles[variant].border">
        <div class="flex items-center gap-1.5" :class="variantStyles[variant].text">
            <slot name="icon" />
            <span class="text-2xl font-extrabold tracking-tight">{{ value }}</span>
        </div>
        <span class="text-xs text-sonic-muted font-medium">{{ label }}</span>
    </div>
</template>

<style scoped></style>