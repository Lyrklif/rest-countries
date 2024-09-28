<script setup lang="ts">
type TProps = {
  titleTag?: string
}

const props = withDefaults(defineProps<TProps>(), {
  titleTag: 'h1'
})

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <header
    class="w-full h-20 px-5 lg:px-20 flex items-center justify-between sticky top-0 left-0 bg-white dark:bg-dark-blue box-shadow z-10"
  >
    <component :is="props.titleTag" class="text-3xl font-bold">Where in the world?</component>

    <button @click="toggleDarkMode">Dark mode</button>
  </header>
</template>
