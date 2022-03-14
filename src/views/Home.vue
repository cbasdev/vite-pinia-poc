<template>
  <h1>Home</h1>
  <h3>Counter:</h3>
  <h3>{{ counterStore.counter }}</h3>
  <h4>Number of changes</h4>
  {{ counterStore.numberOfChanges }}
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>
