<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'

const MIN_LENGTH = 3

const emit = defineEmits(['onSearch'])

const query = ref('')

const searchQuery = computed(() => query.value.trim())
const isValidSearchQuery = computed(() => searchQuery.value.length >= MIN_LENGTH)

const search = () => {
  emit('onSearch', isValidSearchQuery.value ? searchQuery.value : '')
}
</script>

<template>
  <form>
    <input type="search" v-model="query" @input="search" placeholder="Search for a country..." />
  </form>
</template>
