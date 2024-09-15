<script setup lang="ts">
import { useCountryQueries } from '@/queries'
import CountryList from '@/components/CountryList.vue'

const { getAllCountries } = useCountryQueries()
const { isPending, isError, data } = getAllCountries()
</script>

<template>
  <main>
    <p v-if="isPending">Loading...</p>
    <p v-else-if="isError">Error</p>
    <CountryList v-else :list="data" />
  </main>
</template>
