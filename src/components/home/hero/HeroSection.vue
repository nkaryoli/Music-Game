<script setup lang="ts">
import VinilloComponent from './VinilloComponent.vue'
import FloatEqualizerComponent from './FloatEqualizerComponent.vue'
import ActionButtons from './ActionButtons.vue'
import LivePlayersIndicator from './LivePlayersIndicator.vue'
import HeroText from './HeroText.vue'
</script>

<template>
  <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <div class="lg:col-span-7 flex flex-col items-center lg:items-start gap-9">
        <HeroText />
        <ActionButtons />
        <LivePlayersIndicator />
      </div>
      <div class="lg:col-span-5 flex justify-center relative">
        <VinilloComponent />
        <div class="absolute -top-2 right-0">
          <FloatEqualizerComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
