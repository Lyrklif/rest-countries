<script setup lang="ts">
import { fetchCountries } from '@/queries'
import CountryList from '@/components/organisms/CountryList.vue'
import { ref } from 'vue'
import SearchCountry from '@/components/molecules/SearchCountry.vue'
import FilterRegion from '@/components/molecules/FilterRegion.vue'
import AppHeader from '@/components/organisms/AppHeader.vue'
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
  <main class="w-full min-h-screen bg-very-light-gray dark:bg-very-dark-blue-dark dark:text-white">
    <AppHeader />

    <div class="w-full my-[30px] lg:my-12 px-5 lg:px-20 lg:flex lg:items-center lg:justify-between">
      <SearchCountry @onSearch="setName" />
      <FilterRegion @onFilter="setRegion" />
    </div>

    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!filteredList.length">Not Found</p>
    <CountryList v-else :list="filteredList" />
  </main>
</template>
