<script setup lang="ts">
const props = defineProps({
  alt: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <img :src="props.image" :alt="props.alt" width="50" height="20" loading="lazy" />
</template>

<style scoped></style>
