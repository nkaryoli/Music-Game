<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'tertiary'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
    defineProps<{
        variant?: Variant
        size?: Size
        label?: string
        src?: string
        alt?: string
    }>(),
    {
        variant: 'primary',
        size: 'md',
        label: '',
        src: '',
        alt: '',
    },
)

const variants: Record<Variant, string> = {
    primary:
        'from-sonic-fuchsia to-sonic-soft-pink shadow-[0_0_20px_color-mix(in_srgb,var(--color-sonic-fuchsia)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-sonic-fuchsia)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-sonic-violet)_22%,transparent)]',
    secondary:
        'from-sonic-cyan to-sonic-soft-pink shadow-[0_0_20px_color-mix(in_srgb,var(--color-cyan-500)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-cyan-500)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-blue-700)_22%,transparent)]',
    tertiary:
        'from-sonic-violet to-sonic-soft-pink shadow-[0_0_20px_color-mix(in_srgb,var(--color-sonic-violet)_40%,transparent),0_0_50px_color-mix(in_srgb,var(--color-sonic-violet)_28%,transparent),0_0_90px_color-mix(in_srgb,var(--color-sonic-violet)_22%,transparent)]',
}

const sizes: Record<Size, string> = {
    sm: 'w-10 h-10 p-1 text-sm',
    md: 'w-20 h-20 p-1.5 text-xl',
    lg: 'w-24 h-24 p-1.5 text-3xl',
}

const classes = computed(() => [variants[props.variant], sizes[props.size]]);

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