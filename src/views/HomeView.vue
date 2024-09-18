<script setup lang="ts">
import { fetchCountries } from '@/queries'
import CountryList from '@/components/CountryList.vue'
import { ref } from 'vue'
import SearchCountry from '@/components/SearchCountry.vue'
import FilterRegion from '@/components/FilterRegion.vue'
import { useFilterCountries } from '@/hooks/filterCountries'

const query = ref('')
const filter = ref('')

const { isPending: isLoading, isError, data: list } = fetchCountries()
const { filteredList } = useFilterCountries(list, query, filter)

const search = (value: string) => {
  const hasChanges = query.value !== value
  if (!hasChanges) return

  query.value = value
}

const filterRegion = (value: string) => {
  filter.value = value
}
</script>

<template>
  <main>
    <header>
      <h1>Where in the world?</h1>
    </header>

    <SearchCountry @onSearch="search" />
    <FilterRegion @onFilter="filterRegion" />

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!filteredList.length">Not Found</p>
    <CountryList v-else :list="filteredList" />
  </main>
</template>
