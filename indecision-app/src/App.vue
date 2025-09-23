
<template>
  <h1 class="text-3xl font-bold">Mi primer app</h1>
  <hr>

  <!-- // Usando el componente Counter.vue y pasando un valor inicial de 5 a la prop "value" -->
  <Counter :value="5"/>
  <CounterScript :value="6"/>

</template>

<script lang="ts" setup>
import Counter from './components/Counter.vue';
import CounterScript from './components/CounterScript.vue';
</script>

<style scoped>
h1 {
  color: red;
}
</style>
