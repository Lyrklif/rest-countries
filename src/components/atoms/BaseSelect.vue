<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'

type TProps = {
  modelValue: string | number | null
  options: Array<{ value: string | number; label: string }>
}

const props = defineProps<TProps>()

const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <select
    v-model="localValue"
    class="field card h-14 px-4 border-e-8 border-transparent border-solid"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
