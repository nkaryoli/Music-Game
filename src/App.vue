<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <div class="relative min-h-screen bg-sonic-bg text-sonic-text selection:bg-sonic-fuchsia selection:text-white overflow-x-hidden">
    <div class="pointer-events-none fixed -top-24 -left-24 h-110 w-110 rounded-full bg-sonic-fuchsia/20 blur-[130px] z-0"></div>
    <div class="pointer-events-none fixed top-1/3 -right-24 h-120 w-120 rounded-full bg-sonic-violet/20 blur-[140px] z-0"></div>
    <div class="pointer-events-none fixed -bottom-24 left-1/4 h-130 w-130 rounded-full bg-sonic-cyan/15 blur-[150px] z-0"></div>

    <NavbarComponent />

    <main class="relative z-10 w-full pt-24 pb-16 flex flex-col items-center">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>