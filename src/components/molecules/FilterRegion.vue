<script setup lang="ts">
import { ref } from 'vue'

enum FILTERS {
  ALL = '',
  AFRICA = 'africa',
  AMERICA = 'americas',
  ASIA = 'asia',
  EUROPE = 'europe',
  OCEANIA = 'oceania'
}

const filter = ref(FILTERS.ALL)

const emit = defineEmits(['onFilter'])

const onChange = () => {
  emit('onFilter', filter.value)
}
</script>

<template>
  <select
    v-model="filter"
    @change="onChange"
    class="card w-[200px] h-14 mt-[50px] mb-[10px] lg:my-0 pl-6 pr-4 flex items-center justify-between relative rounded-md"
  >
    <option :value="FILTERS.ALL" selected :disabled="!filter" :hidden="!filter">
      Filter by Region
    </option>
    <option :value="FILTERS.AFRICA">Africa</option>
    <option :value="FILTERS.AMERICA">America</option>
    <option :value="FILTERS.ASIA">Asia</option>
    <option :value="FILTERS.EUROPE">Europe</option>
    <option :value="FILTERS.OCEANIA">Oceania</option>
  </select>
</template>
