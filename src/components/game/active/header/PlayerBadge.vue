<script setup lang="ts">
import AvatarComponent from '@/components/AvatarComponent.vue'

interface Props {
  name: string
  avatarPath?: string
  role?: string
}

withDefaults(defineProps<Props>(), {
  role: 'Jugador',
})
</script>

<template>
  <div class="flex items-center gap-3">
    <AvatarComponent
      :src="avatarPath"
      variant="primary"
      size="sm"
      :glow="false"
      :label="name.charAt(0).toUpperCase()"
    />
    <div class="flex flex-col">
      <span class="font-bold text-white text-sm leading-none">{{ name }}</span>
      <span class="text-xs text-sonic-muted">{{ role }}</span>
    </div>
  </div>
</template>

<style scoped></style>
