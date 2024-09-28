<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetCountryDetails } from '@/hooks/useGetCountryDetails'
import { fetchCountries } from '@/queries'
import CountryDetail from '@/components/organisms/CountryDetail.vue'
import AppHeader from '@/components/organisms/AppHeader.vue'

const route = useRoute()
const { isPending: isLoading, isError, data: list } = fetchCountries()
const { countryDetails } = useGetCountryDetails(list, route.params.name.toString())
</script>

<template>
  <main class="w-full min-h-screen bg-very-light-gray dark:bg-very-dark-blue-dark dark:text-white">
    <AppHeader titleTag="p" />

    <RouterLink
      :to="{ name: 'home' }"
      class="w-fit mt-2 mr-2 px-4 py-2 flex items-center justify-center bg-white dark:bg-dark-blue rounded box-shadow"
    >
      Back
    </RouterLink>

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
