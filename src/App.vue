<script setup lang="ts">
import NavbarComponent from './components/navbarComponent.vue';

</script>

<template>
  <NavbarComponent />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

main {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
