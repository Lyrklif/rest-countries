<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetCountryDetails } from '@/hooks/useGetCountryDetails'
import { fetchCountries } from '@/queries'
import CountryDetail from '@/components/organisms/CountryDetail.vue'
import StatusMessages from '@/components/atoms/StatusMessages.vue'
import { computed } from 'vue'

const route = useRoute()
const { isPending: isLoading, isError, data: list } = fetchCountries()
const { countryDetails } = useGetCountryDetails(list, route.params.name.toString())

const isShowCountryData = computed(() => {
  return !isLoading.value && !isError.value && countryDetails.value && route.params.name
})
</script>

<template>
  <RouterLink :to="{ name: 'home' }" class="link-simulate-button md:w-fit">Back</RouterLink>

  <CountryDetail
    v-if="isShowCountryData"
    :name="countryDetails.name.common"
    :nativeName="countryDetails.name.official"
    :population="countryDetails.population"
    :subregion="countryDetails.subregion"
    :region="countryDetails.region"
    :domains="countryDetails.tld"
    :currencies="Object.values(countryDetails.currencies).map((currency) => currency.name)"
    :languages="Object.values(countryDetails.languages)"
    :borders="Object.values(countryDetails.borders)"
    :capitals="countryDetails.capital"
    :image="countryDetails.flags.svg"
    class="mt-10"
  />

  <StatusMessages
    v-else
    :isLoading="isLoading"
    :isError="isError"
    :isNotFound="!countryDetails || !route.params.name"
  />
</template>
