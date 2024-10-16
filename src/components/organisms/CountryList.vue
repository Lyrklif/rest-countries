<script setup lang="ts">
import CountryCard from '../molecules/CountryCard.vue'
import { getCountryCode } from '@/helpers/getCountryCode'

const props = defineProps({
  list: {
    type: Array<Country>,
    default: () => []
  }
})
</script>

<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
    <li v-for="item in props.list" :key="item.name.official">
      <RouterLink :to="{ name: 'country', params: { name: getCountryCode(item) } }">
        <CountryCard
          :name="item.name.common"
          :code="item.fifa"
          :population="item.population"
          :region="item.region"
          :capitals="item.capital"
          :image="item.flags.svg"
        />
      </RouterLink>
    </li>
  </ul>
</template>
