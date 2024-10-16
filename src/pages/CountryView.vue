<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetCountryDetails } from '@/hooks/useGetCountryDetails'
import { fetchCountries } from '@/queries'
import CountryDetail from '@/components/organisms/CountryDetail.vue'
import StatusMessages from '@/components/atoms/StatusMessages.vue'
import { getCountryCode } from '@/helpers/getCountryCode'

const route = useRoute()
const router = useRouter()
const { isPending: isLoading, isError, data: list } = fetchCountries()
const { countryDetails, setCode } = useGetCountryDetails(list)

const isShowCountryData = computed(() => {
  return !isLoading.value && !isError.value && countryDetails.value && route.params.name
})

watch(
  () => route.params.name,
  () => {
    setCode(route.params.name.toString())
  },
  { immediate: true }
)
</script>

<template>
  <header class="flex items-center justify-start gap-5 mb-10">
    <RouterLink :to="{ name: 'home' }" class="link-simulate-button md:w-fit">Home</RouterLink>
    <button @click="router.back()" class="link-simulate-button md:w-fit">Back</button>
  </header>

  <CountryDetail
    v-if="isShowCountryData"
    :code="getCountryCode(countryDetails)"
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
  />

  <StatusMessages
    v-else
    :isLoading="isLoading"
    :isError="isError"
    :isNotFound="!countryDetails || !route.params.name"
  />
</template>
