<script lang="ts" setup>
type ColorVariant = 'fuchsia' | 'crimson' | 'gold'

interface Props {
  title: string
  subtitle: string
  variant?: ColorVariant
}

withDefaults(defineProps<Props>(), {
  variant: 'fuchsia',
})

const variantStyles: Record<
  ColorVariant,
  { hoverBorder: string; titleColor: string; }
> = {
  fuchsia: {
    hoverBorder: 'hover:border-sonic-fuchsia/30',
    titleColor: 'text-sonic-fuchsia',
  },
  crimson: {
    hoverBorder: 'hover:border-sonic-crimson/30',
    titleColor: 'text-sonic-crimson',
  },
  gold: {
    hoverBorder: 'hover:border-sonic-gold/30',
    titleColor: 'text-sonic-gold',
  },
}
</script>

<template>
  <div class="bg-sonic-surface rounded-xl p-3 flex flex-col gap-1" :class="variantStyles[variant].hoverBorder">
    <span class="text-3xl font-extrabold" :class="variantStyles[variant].titleColor">{{ title }}</span>
    <span class="text-md">{{ subtitle }}</span>
  </div>
</template>

<style scoped></style>
