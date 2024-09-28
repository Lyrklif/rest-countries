<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'

const MIN_LENGTH = 1

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
  <form class="card w-full lg:w-[480px] h-14 space-x-4 px-8 flex items-center rounded-md">
    <input
      type="search"
      v-model="query"
      @input="onInput"
      placeholder="Search for a country..."
      class="h-full flex-1 bg-transparent placeholder:text-light-text-secondary dark:placeholder:text-gray-300 focus:outline-none"
    />
  </form>
</template>
