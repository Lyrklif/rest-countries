<script setup lang="ts">
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <header
    class="w-full h-20 px-5 lg:px-20 flex items-center justify-between sticky top-0 left-0 bg-white dark:bg-dark-blue box-shadow z-10"
  >
    <h1 class="text-3xl font-bold">Where in the world?</h1>

    <button @click="toggleDarkMode">Dark mode</button>
  </header>
</template>

<style scoped></style>
