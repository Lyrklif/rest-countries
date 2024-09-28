<script setup lang="ts">
import FlagImage from '@/components/atoms/FlagImage.vue'
import CountryInfoBlock from '@/components/atoms/CountryInfoBlock.vue'

type TProps = {
  name: string
  population: number
  region: string
  capitals: string[]
  image: string
}

const props = defineProps<TProps>()
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
          <CountryInfoBlock title="Population" :text="props.population" />
          <CountryInfoBlock title="Region" :text="props.region" />
          <CountryInfoBlock title="Capital">
            <div v-for="(item, index) in props.capitals" :key="item">
              {{ index ? ', ' : '' }}{{ item }}
            </div>
          </CountryInfoBlock>
        </tbody>
      </table>
    </div>
  </article>
</template>
