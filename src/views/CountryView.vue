<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetCountryDetails } from '@/hooks/useGetCountryDetails'
import { fetchCountries } from '@/queries'
import CountryDetail from '@/components/CountryDetail.vue'

const route = useRoute()
const { isPending: isLoading, isError, data: list } = fetchCountries()
const { countryDetails } = useGetCountryDetails(list, route.params.name.toString())
</script>

<template>
  <main>
    <RouterLink :to="{ name: 'home' }">Back</RouterLink>
    
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="isError">Error</p>
    <p v-else-if="!countryDetails || !route.params.name">Not Found</p>

    <div v-else>
      <CountryDetail
        :name="countryDetails.name.common"
        :population="countryDetails.population"
        :region="countryDetails.region"
        :capitals="countryDetails.capital"
        :image="countryDetails.flags.svg"
      />
    </div>
  </main>
</template>
