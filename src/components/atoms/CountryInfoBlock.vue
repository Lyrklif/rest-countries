<script setup lang="ts">
type TProps = {
  title: string
  text?: string
}

const props = defineProps<TProps>()
</script>

<template>
  <tr class="block">
    <td class="text-sm font-semibold">{{ props.title }}:</td>
    <td class="font-light">
      <slot>{{ props.text }}</slot>
    </td>
  </tr>
</template>
