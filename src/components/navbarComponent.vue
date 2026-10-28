<template>
  <header>
    <div class="logo-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="45" height="45" />
      <h1>Adivina la canción</h1>
    </div>

    <nav>
      <RouterLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-house preview-icon"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          />
        </svg>
        Home</RouterLink
      >
      <RouterLink to="/play">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-play preview-icon"
        >
          <path
            d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
          />
        </svg>
        Jugar
      </RouterLink>
      <RouterLink to="/ranking">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trophy preview-icon"
        >
          <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
          <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
          <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
          <path d="M4 22h16" />
          <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
          <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
        </svg>
        Ranking
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 1rem 2rem;
  background-color: var(--color-bg);
  color: white;
  background-color: var(--color-bg-surface);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.7rem;
}

nav {
  display: flex;
  gap: 2.5rem;
}

a {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: white;
  text-decoration: none;
}

svg {
    font-size: 0.5rem;
}

a:hover {
  color: var(--color-highlight);
  text-decoration: underline var(--color-highlight) 2px; 
}

</style>
