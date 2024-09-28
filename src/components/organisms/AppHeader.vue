<script setup lang="ts">
import DarkModeToggle from '@/components/molecules/DarkModeToggle.vue'

type TProps = {
  titleTag?: string
}

const props = withDefaults(defineProps<TProps>(), {
  titleTag: 'h1'
})
</script>

<template>
  <header
    class="card w-full h-20 px-5 lg:px-20 flex items-center justify-between sticky top-0 left-0 z-10"
  >
    <component :is="props.titleTag" class="text-3xl font-bold">Where in the world?</component>

    <DarkModeToggle />
  </header>
</template>
