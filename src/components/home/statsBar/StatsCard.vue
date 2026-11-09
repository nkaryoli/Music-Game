<script setup lang="ts">
import IconCard from '../../IconCard.vue';

type ColorVariant = 'fuchsia' | 'violet' | 'cyan' | 'gradient';
type Size = 'small' | 'medium' | 'large'

interface Props {
  title: string
  subtitle: string
  tagline: string
  variant?: ColorVariant
  size?: Size
}

withDefaults(defineProps<Props>(), {
  variant: 'fuchsia',
  size: 'medium'
})

const variantStyles: Record<
  ColorVariant,
  { hoverBorder: string; taglineColor: string; }
> = {
  fuchsia: {
    hoverBorder: 'hover:border-sonic-violet/30',
    // iconBg: 'bg-sonic-violet/25',
    // iconColor: 'text-sonic-text',
    taglineColor: 'text-sonic-text',
    // neonGlow: 'shadow-[0_0_30px_rgba(100,57,205,0.39)]',
  },
  violet: {
    hoverBorder: 'hover:border-sonic-violet/30',
    // iconBg: 'bg-sonic-fuchsia/15',
    // iconColor: 'text-sonic-fuchsia',
    taglineColor: 'text-sonic-fuchsia',
    // neonGlow: 'shadow-[0_0_25px_rgba(242,119,255,0.29)]',
  },
  cyan: {
    hoverBorder: 'hover:border-sonic-cyan/30',
    // iconBg: 'bg-sonic-cyan/40',
    // iconColor: 'text-sonic-cyan',
    taglineColor: 'text-sonic-cyan',
    // neonGlow: 'shadow-[0_0_30px_rgba(6,222,232,0.39)]',
  },
  gradient: {
    hoverBorder: 'hover:border-sonic-fuchsia/30',
    // iconBg: 'bg-gradient-to-tr from-sonic-fuchsia to-sonic-violet',
    // iconColor: 'text-white',
    taglineColor: 'text-white',
    // neonGlow: 'shadow-[0_0_30px_rgba(192,38,211,0.39)]',
  }
}
</script>

<template>
  <div
    class="glass-panel rounded-2xl p-5 flex items-center gap-4 transition-colors"
    :class="variantStyles[variant].hoverBorder"
  >
    <IconCard :variant="variant" :size="size">
      <template #icon>
        <slot name="icon" />
      </template>
    </IconCard>
    <div class="flex flex-col items-start gap-0.5">
      <span class="text-2xl font-bold text-white leading-none">{{ title }}</span>
      <span class="text-sm text-sonic-muted">{{ subtitle }}</span>
      <span class="text-xs font-semibold mt-0.5" :class="variantStyles[variant].taglineColor">
        ● {{ tagline }}
      </span>
    </div>
  </div>
</template>
