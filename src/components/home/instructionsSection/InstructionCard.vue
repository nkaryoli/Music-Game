<script setup lang="ts">
type ColorVariant = 'fuchsia' | 'violet' | 'cyan'

interface Props {
  step: string
  title: string
  description: string
  tagline: string
  variant?: ColorVariant
}

withDefaults(defineProps<Props>(), {
  variant: 'fuchsia',
})

const variantStyles: Record<
  ColorVariant,
  {
    iconBg: string
    iconColor: string
    stepColor: string
    taglineColor: string
    hoverBorder: string
    neonGlow: string
  }
> = {
  fuchsia: {
    iconBg: 'bg-sonic-fuchsia/15',
    iconColor: 'text-sonic-fuchsia',
    stepColor: 'text-sonic-fuchsia',
    taglineColor: 'text-sonic-fuchsia',
    hoverBorder: 'hover:border-sonic-fuchsia/40',
    neonGlow: 'group-hover:shadow-[0_0_30px_rgba(192,38,211,0.2)]',
  },
  violet: {
    iconBg: 'bg-sonic-violet/15',
    iconColor: 'text-sonic-violet',
    stepColor: 'text-sonic-violet',
    taglineColor: 'text-sonic-violet',
    hoverBorder: 'hover:border-sonic-violet/40',
    neonGlow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]',
  },
  cyan: {
    iconBg: 'bg-sonic-cyan/15',
    iconColor: 'text-sonic-cyan',
    stepColor: 'text-sonic-cyan',
    taglineColor: 'text-sonic-cyan',
    hoverBorder: 'hover:border-sonic-cyan/40',
    neonGlow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  },
}
</script>

<template>
  <div
    class="group glass-panel rounded-3xl p-7 flex flex-col gap-5 transition-all duration-300 cursor-default"
    :class="[variantStyles[variant].hoverBorder, variantStyles[variant].neonGlow]"
  >
    <div
      class="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      :class="[variantStyles[variant].iconBg, variantStyles[variant].iconColor]"
    >
      <slot name="icon" />
    </div>
    <span
      class="text-xs font-extrabold uppercase tracking-widest"
      :class="variantStyles[variant].stepColor"
      >Paso{{ step }}</span
    >
    <h3 class="text-xl font-bold text-white">{{ title }}</h3>
    <p class="text-sonic-muted text-sm leading-relaxed grow">{{ description }}</p>
    <div class="flex items-center gap-2 bg-sonic-surface/70 rounded-2xl px-3 py-6 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 shrink-0"
        :class="variantStyles[variant].taglineColor"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      <span class="text-xs font-semibold" :class="variantStyles[variant].taglineColor">
        {{ tagline }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
