<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
    defineProps<{
        variant?: Variant;
        size?: Size;
        label?: string;
        src?: string;
        alt?: string;
        glow?: boolean;
    }>(),
    {
        variant: 'primary',
        size: 'md',
        label: '',
        src: '',
        alt: '',
        glow: true,
    },
)

const gradients: Record<Variant, string> = {
    primary: 'from-sonic-fuchsia to-sonic-soft-pink',
    secondary: 'from-sonic-cyan to-sonic-soft-pink',
    tertiary: 'from-sonic-violet to-sonic-soft-pink',
};

const glowEffects: Record<Variant, string> = {
    primary:
        'shadow-[0_0_20px_color-mix(in_srgb,var(--color-sonic-fuchsia)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-sonic-fuchsia)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-sonic-violet)_22%,transparent)]',
    secondary:
        'shadow-[0_0_20px_color-mix(in_srgb,var(--color-cyan-500)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-cyan-500)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-blue-700)_22%,transparent)]',
    tertiary:
        'shadow-[0_0_20px_color-mix(in_srgb,var(--color-sonic-violet)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-sonic-violet)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-sonic-violet)_22%,transparent)]',
}

const sizes: Record<Size, string> = {
    sm: 'w-10 h-10 p-0.5 text-sm',
    md: 'w-16 h-16 p-1 text-xl',
    lg: 'w-20 h-20 p-1.5 text-3xl',
}

const classes = computed(() => [
    gradients[props.variant],
    sizes[props.size],
    props.glow ? glowEffects[props.variant] : '',
]);

</script>

<template>
    <div class="rounded-full bg-linear-to-tr flex items-center justify-center font-extrabold text-white shrink-0"
        :class="classes">
        <div class="w-full h-full bg-[#181124] rounded-full flex items-center justify-center overflow-hidden">
            <img v-if="src" :src="src" :alt="alt || label" class="w-full h-full object-cover" />
            <slot v-else>{{ label }}</slot>
        </div>
    </div>
</template>