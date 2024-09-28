<script setup lang="ts">
import CountryCard from '../molecules/CountryCard.vue'

const props = defineProps({
  list: {
    type: Array<Country>,
    default: () => []
  }
})
</script>

<template>
  <ul class="px-5 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
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
