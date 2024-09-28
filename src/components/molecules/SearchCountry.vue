<script setup lang="ts">
import { computed, defineEmits, ref } from 'vue'
import BaseInput from '@/components/atoms/BaseInput.vue'

const MIN_LENGTH = 1

const emit = defineEmits(['onSearch'])

const query = ref('')

const trimmedQuery = computed(() => query.value.trim())
const isValidQuery = computed(() => trimmedQuery.value.length >= MIN_LENGTH)

const onInput = (value: string) => {
  const searchValue = isValidQuery.value ? trimmedQuery.value : ''
  emit('onSearch', searchValue)
  query.value = value
}
</script>

<template>
  <form class="card w-full lg:w-[480px] h-14 space-x-4 px-8 flex items-center rounded-md">
    <BaseInput v-model="query" placeholder="Search for a country..." @update:modelValue="onInput" />
  </form>
</template>
