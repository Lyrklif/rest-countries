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

const isLoading = computed(() =>
  isValidSearchQuery.value ? isSearchPending.value : isFullListPending.value
)
const isError = computed(() =>
  isValidSearchQuery.value ? isSearchError.value : isFullListError.value
)

const isValidSearchQuery = computed((): boolean => query.value.trim().length >= MIN_LENGTH)

const list = computed((): Country[] => {
  const list = isValidSearchQuery.value ? searchedList.value : fullList.value
  return list?.length ? list : []
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
