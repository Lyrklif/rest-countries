<script setup lang="ts">
import FlagImage from '@/components/atoms/FlagImage.vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  population: {
    type: Number,
    default: 0
  },
  region: {
    type: String,
    default: ''
  },
  capitals: {
    type: Array<string>,
    default: () => []
  },
  image: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article class="w-full rounded-md box-shadow overflow-hidden bg-white dark:bg-dark-blue">
    <FlagImage :alt="props.name" :image="props.image" height="160" />

    <div class="p-6">
      <header class="mb-2">
        <h2 class="text-xl font-bold">{{ props.name }}</h2>
      </header>

      <table class="block">
        <tbody class="block">
          <tr class="block">
            <td class="text-sm font-semibold">Population:</td>
            <td class="font-light">{{ props.population }}</td>
          </tr>
          <tr class="block">
            <td class="text-sm font-semibold">Region:</td>
            <td class="font-light">{{ props.region }}</td>
          </tr>
          <tr class="block">
            <td class="text-sm font-semibold">Capital:</td>
            <td v-for="(item, index) in props.capitals" :key="item" class="font-light">
              {{ index ? ', ' : '' }}{{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
