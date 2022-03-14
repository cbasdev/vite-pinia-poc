<template>
  <h1>Counter</h1>

  <h3>Counter:</h3>
  <h3>{{ counterStore.counter }}</h3>
  <h4>Number of changes COUNTER V</h4>
  {{ counterStore.numberOfChanges }}

  <button @click="counterStore.incrementBy(1)">Incrementar en 1</button>
  <button @click="counterStore.incrementBy(3)">Incrementar en 3</button>
  <button @click="counterStore.incrementBy(10)">Incrementar en 10</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>
