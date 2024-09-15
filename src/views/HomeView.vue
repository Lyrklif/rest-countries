<script setup lang="ts">
import { useCountryQueries } from '@/queries'
import CountryList from '@/components/CountryList.vue'
import { computed, ref } from 'vue'
import SearchCountry from '@/components/SearchCountry.vue'
import FilterRegion from '@/components/FilterRegion.vue'

const query = ref('')
const filter = ref('')

const { getAllCountries, searchCountryByName, filterByRegion } = useCountryQueries()
const { isPending: isFullListPending, isError: isFullListError, data: fullList } = getAllCountries()
const {
  refetch: searchRefetch,
  data: searchedList,
  isPending: isSearchPending,
  isError: isSearchError
} = searchCountryByName(query)

const {
  isPending: isFilterPending,
  isError: isFilterError,
  data: filteredList,
  refetch: filterRefetch
} = filterByRegion(filter)

const isLoading = computed((): boolean => {
  if (filter.value) return isFilterPending.value
  if (query.value) return isSearchPending.value
  else return isFullListPending.value
})

const isError = computed((): boolean => {
  if (filter.value) return isFilterError.value
  if (query.value) return isSearchError.value
  else return isFullListError.value
})

const list = computed((): Country[] => {
  if (filter.value) return filteredList.value ?? []
  if (query.value) return searchedList.value ?? []
  else return fullList.value ?? []
})

const search = (value: string) => {
  const hasChanges = query.value !== value
  if (!hasChanges) return

  query.value = value
  if (value) searchRefetch()
}

const filterRegion = (value: string) => {
  filter.value = value
  if (value) filterRefetch()
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
    <p v-else-if="!list.length">Not Found</p>
    <CountryList v-else :list="list" />
  </main>
</template>
