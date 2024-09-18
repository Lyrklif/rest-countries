<script setup lang="ts">
import { fetchCountries } from '@/queries'
import CountryList from '@/components/CountryList.vue'
import { ref } from 'vue'
import SearchCountry from '@/components/SearchCountry.vue'
import FilterRegion from '@/components/FilterRegion.vue'
import { useFilterCountries } from '@/hooks/useFilterCountries'
import { debounce } from 'lodash'

const WAIT = 100

const name = ref('')
const region = ref('')

const { isPending: isLoading, isError, data: list } = fetchCountries()
const { filteredList } = useFilterCountries(list, name, region)

const setName = debounce((value: string) => {
  const hasChanges = name.value !== value
  if (!hasChanges) return

  name.value = value
}, WAIT)

const setRegion = (value: string) => {
  region.value = value
}
</script>

<template>
  <main>
    <header>
      <h1 class="text-3xl font-bold">Where in the world?</h1>
    </header>

    <SearchCountry @onSearch="setName" />
    <FilterRegion @onFilter="setRegion" />

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!filteredList.length">Not Found</p>
    <CountryList v-else :list="filteredList" />
  </main>
</template>
