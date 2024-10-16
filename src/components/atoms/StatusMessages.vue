<script setup lang="ts">
type TProps = {
  isLoading: boolean
  isError: boolean
  isNotFound: boolean
}

const props = defineProps<TProps>()
const textClasses = 'text-3xl font-bold text-center'
</script>

<template>
  <p v-if="props.isLoading" :class="textClasses">Loading...</p>
  <p v-else-if="props.isNotFound" :class="textClasses">Not Found</p>
  <p v-else-if="props.isError" :class="textClasses">Error</p>
</template>

<style scoped></style>
