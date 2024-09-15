<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <p>{{ props.name }}</p>
  </div>
</template>
