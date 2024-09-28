<script setup lang="ts">
import FlagImage from '@/components/FlagImage.vue'

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
  <article class="px-14 lg:px-20 lg:grid lg:grid-cols-2 lg:gap-20">
    <div class="my-10 lg:my-0 flex items-center justify-center">
      <FlagImage :alt="props.name" :image="props.image" />
    </div>

    <div
      class="pb-10 lg:pb-0 flex flex-grow lg:flex-grow-0 flex-col justify-between lg:justify-center"
    >
      <header>
        <h1 class="mb-10 lg:mb-0 text-3xl font-extrabold">{{ props.name }}</h1>
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
            <td v-for="(item, index) in props.capitals" :key="item" class="">
              <RouterLink
                :to="{ name: 'country', params: { name: item } }"
                class="mt-2 mr-2 px-4 py-2 flex items-center justify-center bg-white dark:bg-dark-blue rounded box-shadow"
              >
                {{ index ? ', ' : '' }}{{ item }}
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
