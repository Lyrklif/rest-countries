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
    class="field h-full px-4 flex-1 bg-transparent"
  />
</template>
