<script setup lang="ts">
import { useDarkMode } from '@/hooks/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

<template>
  <header class="card w-full h-20 flex items-center justify-between">
    <h1 class="text-xl lg:text-3xl font-bold">Where in the world?</h1>

    <button @click="toggleDarkMode" class="h-full px-2">
      <span class="block md:hidden">{{ isDarkMode ? 'Light' : 'Dark' }}</span>
      <span class="hidden md:block">{{ isDarkMode ? 'Light mode' : 'Dark mode' }}</span>
    </button>
  </header>
</template>
