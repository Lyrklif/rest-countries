<script setup lang="ts">
import { useCountryQueries } from '@/queries'
import CountryList from '@/components/CountryList.vue'
import { computed, ref } from 'vue'

const MIN_LENGTH = 3

const query = ref('')

const { getAllCountries, searchCountryByName } = useCountryQueries()
const { isPending: isFullListPending, isError: isFullListError, data: fullList } = getAllCountries()
const {
  refetch: searchRefetch,
  data: searchedList,
  isPending: isSearchPending,
  isError: isSearchError
} = searchCountryByName(query)

const isValidSearchQuery = computed((): boolean => query.value.trim().length >= MIN_LENGTH)

const isLoading = computed((): boolean =>
  isValidSearchQuery.value ? isSearchPending.value : isFullListPending.value
)
const isError = computed((): boolean =>
  isValidSearchQuery.value ? isSearchError.value : isFullListError.value
)

const list = computed((): Country[] => {
  return isValidSearchQuery.value ? (searchedList.value ?? []) : (fullList.value ?? [])
})

const search = () => {
  if (!isValidSearchQuery.value) return

  searchRefetch()
}
</script>

<template>
  <main>
    <header>
      <h1>Where in the world?</h1>
    </header>

    <form>
      <input type="search" placeholder="Search for a country..." v-model="query" @input="search" />
    </form>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!list.length">Not Found</p>
    <CountryList v-else :list="list" />
  </main>
</template>
