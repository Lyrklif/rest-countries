<script setup lang="ts">
import CountryCard from './CountryCard.vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <ul>
    <li v-for="item in props.list" :key="item.name">
      <CountryCard :name="item.name.common" />
    </li>
  </ul>
</template>

<style scoped></style>
