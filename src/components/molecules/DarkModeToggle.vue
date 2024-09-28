<script setup lang="ts">
import { useDarkMode } from '@/hooks/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button @click="toggleDarkMode">
    {{ isDarkMode ? '-' : '+' }}
    Dark mode
  </button>
</template>
