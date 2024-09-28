<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    type="search"
    :value="props.modelValue"
    @input="onInput"
    :placeholder="placeholder"
    class="h-full flex-1 bg-transparent placeholder:text-light-text-secondary dark:placeholder:text-gray-300 focus:outline-none"
  />
</template>
