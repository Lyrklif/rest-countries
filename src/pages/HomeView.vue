<script setup lang="ts">
import { fetchCountries } from '@/queries'
import CountryList from '@/components/organisms/CountryList.vue'
import { computed, ref } from 'vue'
import SearchCountry from '@/components/molecules/SearchCountry.vue'
import FilterRegion from '@/components/molecules/FilterRegion.vue'
import StatusMessages from '@/components/atoms/StatusMessages.vue'
import { useFilterCountries } from '@/hooks/useFilterCountries'
import { debounce } from 'lodash'

const WAIT = 100

const name = ref<string>('')
const region = ref<string>('')

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

const isShowList = computed(() => {
  return !isLoading.value && !isError.value && filteredList.value.length
})
</script>

<template>
  <div class="w-full lg:flex lg:items-center lg:justify-between mb-10 gap-5">
    <SearchCountry @onSearch="setName" class="w-full lg:w-96" />
    <FilterRegion @onFilter="setRegion" class="w-full lg:w-52 mt-5 lg:mt-0" />
  </div>

  <CountryList v-if="isShowList" :list="filteredList" />

  <StatusMessages
    v-else
    :isLoading="isLoading"
    :isError="isError"
    :isNotFound="!filteredList.length"
  />
</template>
