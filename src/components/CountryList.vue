<script setup lang="ts">
import CountryCard from './CountryCard.vue'

const props = defineProps({
  list: {
    type: Array<Country>,
    default: () => []
  }
})
</script>

<template>
  <ul>
    <li v-for="item in props.list" :key="item.name.official">
      <RouterLink :to="{ name: 'country', params: { name: item.name.common } }">
        <CountryCard
          :name="item.name.common"
          :population="item.population"
          :region="item.region"
          :capitals="item.capital"
          :image="item.flags.svg"
        />
      </RouterLink>
    </li>
  </ul>
</template>
