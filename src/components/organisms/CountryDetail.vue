<script setup lang="ts">
import FlagImage from '@/components/atoms/FlagImage.vue'
import CountryInfoBlock from '@/components/atoms/CountryInfoBlock.vue'

type TProps = {
  name: string
  nativeName: string
  subregion: string
  population: number
  region: string
  capitals: string[]
  domains: string[]
  currencies: string[]
  languages: string[]
  borders: string[]
  image: string
}

const props = defineProps<TProps>()
</script>

<template>
  <article class="lg:grid lg:grid-cols-2 lg:gap-20">
    <div class="mb-10 lg:mb-0 flex items-center justify-center">
      <FlagImage :alt="props.name" :image="props.image" class="md:max-w-96 lg:max-w-full" />
    </div>

    <div
      class="pb-10 lg:pb-0 flex flex-grow lg:flex-grow-0 flex-col justify-between lg:justify-center"
    >
      <header>
        <h1 class="mb-10 lg:mb-4 text-3xl font-extrabold">{{ props.name }}</h1>
      </header>

      <table class="block">
        <tbody class="block">
          <CountryInfoBlock v-if="props.nativeName" title="Native Name" :text="props.nativeName" />
          <CountryInfoBlock v-if="props.population" title="Population" :text="props.population" />
          <CountryInfoBlock v-if="props.region" title="Region" :text="props.region" />
          <CountryInfoBlock v-if="props.subregion" title="Subregion" :text="props.subregion" />
          <CountryInfoBlock
            v-if="props.capitals?.length"
            title="Capital"
            :text="props.capitals.join(', ')"
          />
          <CountryInfoBlock
            v-if="props.domains?.length"
            title="Top Level Domain"
            :text="props.domains.join(', ')"
          />
          <CountryInfoBlock
            v-if="props.currencies?.length"
            title="Currencies"
            :text="props.currencies.join(', ')"
          />
          <CountryInfoBlock
            v-if="props.languages?.length"
            title="Languages"
            :text="props.languages.join(', ')"
          />

          <CountryInfoBlock
            v-if="props.borders.length"
            title="Border Countries"
            class="mt-4"
            valueClasses="flex flex-wrap gap-2"
          >
            <RouterLink
              v-for="item in props.borders"
              :key="item"
              :to="{ name: 'country', params: { name: item } }"
              class="link-simulate-button mt-2 mr-2"
            >
              {{ item }}
            </RouterLink>
          </CountryInfoBlock>
        </tbody>
      </table>
    </div>
  </article>
</template>
