<script lang="ts" setup>
type ColorVariant = 'fuchsia' | 'violet' | 'cyan' | "gradient";
type Size = 'small' | 'medium' | 'large'

interface Props {
    variant?: ColorVariant
    size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<Props>(), {
    variant: 'gradient',
    size: 'medium'
})

const variantStyles: Record<
    ColorVariant,
    { bgGradient: string; iconColor: string; bgColor: string; neonGlow: string; }
> = {
    fuchsia: {
        bgGradient: '',
        iconColor: 'text-sonic-text',
        bgColor: 'bg-sonic-violet/25',
        neonGlow: 'shadow-[0_0_30px_rgba(100,57,205,0.39)]',
    },
    violet: {
        bgGradient: '',
        iconColor: 'text-sonic-fuchsia',
        bgColor: 'bg-sonic-fuchsia/15',
        neonGlow: 'shadow-[0_0_25px_rgba(242,119,255,0.29)]',
    },
    cyan: {
        bgGradient: '',
        iconColor: 'text-sonic-cyan',
        bgColor: 'bg-sonic-cyan/20 shadow-sonic-cyan/10',
        neonGlow: 'shadow-[0_0_30px_rgba(6,222,232,0.39)]',
    },
    gradient: {
        bgGradient: 'bg-gradient-to-tr from-sonic-fuchsia to-sonic-violet',
        iconColor: 'text-white',
        bgColor: '',
        neonGlow: 'shadow-lg shadow-sonic-fuchsia/40',
    }
}

const sizeStyles: Record<Size, {
  container: string
  iconSize: string
  rounded: string
}> = {
  small: {
    container: 'p-2',
    iconSize: 'text-xl',
    rounded: 'rounded-lg'
  },
  medium: {
    container: 'p-3',
    iconSize: 'text-3xl',
    rounded: 'rounded-xl'
  },
  large: {
    container: 'w-20 h-20 p-5',
    iconSize: 'text-4xl',
    rounded: 'rounded-full'
  },
}
</script>

<template>
  <div
    class="flex items-center justify-center"
    :class="[variantStyles[variant].bgGradient || variantStyles[variant].bgColor, variantStyles[variant].iconColor, variantStyles[variant].neonGlow, sizeStyles[size].container, sizeStyles[size].rounded]"
  >
    <slot name="icon" />
  </div>
</template>

<style scoped></style>
