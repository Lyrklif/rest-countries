<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  population: {
    type: Number,
    default: 0
  },
  region: {
    type: String,
    default: ''
  },
  capitals: {
    type: Array<string>,
    default: () => []
  },
  image: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <article>
    <img :src="image" :alt="props.name" />

    <header>
      <h2>{{ props.name }}</h2>
    </header>

    <table>
      <tbody>
        <tr>
          <td>Population:</td>
          <td>{{ props.population }}</td>
        </tr>
        <tr>
          <td>Region:</td>
          <td>{{ props.region }}</td>
        </tr>
        <tr>
          <td>Capital:</td>
          <td v-for="(item, index) in props.capitals" :key="item">
            {{ index ? ', ' : '' }}{{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>
