<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/molecules/AppHeader.vue'
</script>

<template>
  <div
    class="app w-full min-h-screen bg-very-light-gray dark:bg-very-dark-blue-dark dark:text-white"
  >
    <AppHeader class="app-header px-5 lg:px-20 sticky top-0 left-0 z-10" />

    <main class="app-content w-full px-5 lg:px-20 py-10">
      <RouterView />
    </main>

    <footer class="app-footer flex justify-center">
      <a
        href="https://github.com/lyrklif/rest-countries"
        class="link-simulate-button"
        target="_blank"
      >
        GitHub
      </a>
    </footer>
  </div>
</template>

<style>
.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

.app-header {
  grid-area: header;
}

.app-content {
  grid-area: main;
}

.app-footer {
  grid-area: footer;
}
</style>
