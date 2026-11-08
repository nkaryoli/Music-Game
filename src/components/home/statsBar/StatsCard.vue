<script setup lang="ts">

type ColorVariant = 'fuchsia' | 'violet' | 'cyan'


interface Props {
    title: string
    subtitle: string
    tagline: string
    variant?: ColorVariant
}

withDefaults(defineProps<Props>(), {
    variant: 'fuchsia'
})

const variantStyles: Record<ColorVariant, { hoverBorder: string; iconBg: string; iconColor: string; taglineColor: string, neonGlow: string }> = {
    fuchsia: {
        hoverBorder: 'hover:border-sonic-violet/30',
        iconBg: 'bg-sonic-violet/25',
        iconColor: 'text-sonic-text',
        taglineColor: 'text-sonic-text',
        neonGlow: 'shadow-[0_0_30px_rgba(100,57,205,0.39)]'
    },
    violet: {
        hoverBorder: 'hover:border-sonic-violet/30',
        iconBg: 'bg-sonic-fuchsia/15',
        iconColor: 'text-sonic-fuchsia',
        taglineColor: 'text-sonic-fuchsia',
        neonGlow: 'shadow-[0_0_25px_rgba(242,119,255,0.29)]'
    },
    cyan: {
        hoverBorder: 'hover:border-sonic-cyan/30',
        iconBg: 'bg-sonic-cyan/40',
        iconColor: 'text-sonic-cyan',
        taglineColor: 'text-sonic-cyan',
        neonGlow: 'shadow-[0_0_30px_rgba(6,222,232,0.39)]'
    }
}
</script>

<template>
    <div class="glass-panel rounded-2xl p-5 flex items-center gap-4 transition-colors"
        :class="variantStyles[variant].hoverBorder">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            :class="[variantStyles[variant].iconBg, variantStyles[variant].iconColor, variantStyles[variant].neonGlow]">
            <slot name="icon" />
        </div>
        <div class="flex flex-col items-start gap-0.5">
            <span class="text-2xl font-bold text-white leading-none">{{ title }}</span>
            <span class="text-sm text-sonic-muted">{{ subtitle }}</span>
            <span class="text-xs font-semibold mt-0.5" :class="variantStyles[variant].taglineColor">
                ● {{ tagline }}
            </span>
        </div>
    </div>
</template>