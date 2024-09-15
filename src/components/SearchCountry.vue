<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'

const MIN_LENGTH = 3

const emit = defineEmits(['onSearch'])

const query = ref('')

const trimmedQuery = computed(() => query.value.trim())
const isValidQuery = computed(() => trimmedQuery.value.length >= MIN_LENGTH)

const onInput = () => {
  const searchValue = isValidQuery.value ? trimmedQuery.value : ''
  emit('onSearch', searchValue)
}
</script>

<template>
  <form>
    <input type="search" v-model="query" @input="onInput" placeholder="Search for a country..." />
  </form>
</template>
