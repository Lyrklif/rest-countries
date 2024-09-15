<script setup lang="ts">
import { useCountryQueries } from '@/queries'
import CountryList from '@/components/CountryList.vue'
import { computed, ref } from 'vue'
import SearchCountry from '@/components/SearchCountry.vue'

const query = ref('')

const { getAllCountries, searchCountryByName } = useCountryQueries()
const { isPending: isFullListPending, isError: isFullListError, data: fullList } = getAllCountries()
const {
  refetch: searchRefetch,
  data: searchedList,
  isPending: isSearchPending,
  isError: isSearchError
} = searchCountryByName(query)

const isLoading = computed((): boolean =>
  query.value ? isSearchPending.value : isFullListPending.value
)
const isError = computed((): boolean => (query.value ? isSearchError.value : isFullListError.value))

const list = computed((): Country[] => {
  return query.value ? (searchedList.value ?? []) : (fullList.value ?? [])
})

const search = (value: string) => {
  const hasChanges = query.value !== value
  if (!hasChanges) return
  
  query.value = value
  if (value) searchRefetch()
}
</script>

<template>
  <main>
    <header>
      <h1>Where in the world?</h1>
    </header>

    <SearchCountry @onSearch="search" />

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!list.length">Not Found</p>
    <CountryList v-else :list="list" />
  </main>
</template>
