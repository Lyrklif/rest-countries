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
    class="card w-[200px] h-14 mt-3 mb-2.5 lg:my-0 pl-6 pr-4 flex items-center justify-between relative rounded-md"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
