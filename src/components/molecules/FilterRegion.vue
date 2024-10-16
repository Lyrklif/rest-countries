<script setup lang="ts">
import { ref } from 'vue'
import BaseSelect from '@/components/atoms/BaseSelect.vue'

enum FILTERS {
  ALL = '',
  AFRICA = 'africa',
  AMERICA = 'americas',
  ASIA = 'asia',
  EUROPE = 'europe',
  OCEANIA = 'oceania'
}

const filter = ref(FILTERS.ALL)

const options = [
  { value: FILTERS.ALL, label: 'Filter by Region' },
  { value: FILTERS.AFRICA, label: 'Africa' },
  { value: FILTERS.AMERICA, label: 'America' },
  { value: FILTERS.ASIA, label: 'Asia' },
  { value: FILTERS.EUROPE, label: 'Europe' },
  { value: FILTERS.OCEANIA, label: 'Oceania' }
]

const emit = defineEmits(['onFilter'])

const onFilterChange = (value: FILTERS) => {
  filter.value = value
  emit('onFilter', filter.value)
}
</script>

<template>
  <BaseSelect v-model="filter" :options="options" @update:model-value="onFilterChange" />
</template>
