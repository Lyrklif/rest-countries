<script setup lang="ts">
type TProps = {
  title: string
  text?: string | number
  valueClasses?: string
}

const props = defineProps<TProps>()
</script>

<template>
  <tr class="block text-lg">
    <td class="font-bold pr-2">{{ props.title }}:</td>
    <td class="font-light dark:text-gray-300" :class="valueClasses">
      <slot>{{ props.text || '-' }}</slot>
    </td>
  </tr>
</template>
