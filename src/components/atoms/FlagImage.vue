<script setup lang="ts">
import { ref } from 'vue'

type TProps = {
  alt: string
  image: string
  height?: string | number
  width?: string | number
}

const props = defineProps<TProps>()
const isLoading = ref<boolean>(true)

const onLoadEnd = () => {
  isLoading.value = false
}
</script>

<template>
  <div class="relative max-w-full w-full" :style="{ height: props.height + 'px' }">
    <div v-if="isLoading" class="absolute inset-0 bg-gray-200 animate-pulse" />

    <img
      :src="props.image"
      :alt="props.alt"
      loading="lazy"
      @load="onLoadEnd"
      @error="onLoadEnd"
      class="w-full max-w-full h-full max-h-full object-cover"
    />
  </div>
</template>
