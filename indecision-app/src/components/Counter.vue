/** * Manual de Estudio: Componente de forma corta de un Contador con Vue 3 y TypeScript * * Este componente implementa
un contador interactivo utilizando la Composition API de Vue 3. * * Estructura del template: * -
Muestra el valor actual del contador (`counter`). * - Muestra el cuadrado del contador (`square`),
calculado automáticamente. * - Incluye dos botones para incrementar y decrementar el contador. * *
Lógica en
<!-- *<script setup>: setup es una sintaxis especial en Vue 3 que permite usar la Composition API de manera más concisa sin la necesidad de hacer exportaciones explicitas.
 * - `counter`: Es una variable reactiva inicializada en 10 usando `ref.
 * - `square`: Es una propiedad computada (`computed`) que retorna el cuadrado del valor actual de `counter`.
 * - Los botones modifican el valor de `counter` directamente usando los eventos `@click`.
 *
 * Estilos:
 * - El selector `h1` aplica color rojo, aunque en este componente no hay un `<h1>`.
 *
 * Conceptos clave:
 * - Uso de `ref` para variables reactivas.
 * - Uso de `computed` para valores derivados.
 * - Manejo de eventos con `@click`.
 * - Encapsulamiento de estilos con `scoped`.
 nota: cuando usamos `ref`, debemos acceder al valor real con `.value`.
 nota 2: las propiedades computadas se actualizan automáticamente cuando las dependencias cambian.
 nota 3: en js hacer esto seria un proceso mas complejo ya que habria que usar eventos y listeners.
 // Ejemplo en JavaScript puro (sin Vue):
 let counter = 10;

 function updateDisplay() {
  document.getElementById('counter').textContent = counter;
  document.getElementById('square').textContent = counter * counter;
 }

 document.getElementById('increment').addEventListener('click', () => {
  counter++;
  updateDisplay();
 });

 document.getElementById('decrement').addEventListener('click', () => {
  counter--;
  updateDisplay();
 });

 // Inicializar la vista
 updateDisplay();

 // HTML de referencia:
 // <div>
 //   <span id="counter"></span>
 //   <span id="square"></span>
 //   <button id="increment">+1</button>
 //   <button id="decrement">-1</button>
 // </div>

 **/ -->
<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{square }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
//trabajando con composables que son funciones reutilizables que encapsulan logica reactiva de Vue
import { useCounter } from '@/composables/useCounter';


const{counter, square} = useCounter();
const props = defineProps<{ value: number }>();

// import { computed, ref } from 'vue';


  // Props Manual:

  // En Vue, las "props" (propiedades) son una forma de pasar datos desde un componente padre a un componente hijo.
  // Permiten que los componentes sean reutilizables y configurables.

  // ¿Cómo se usan?
  // 1. Definición: En el componente hijo, se definen las props que se esperan recibir.
  //    Ejemplo:
  //    props: {
  //      count: {
  //        type: Number,
  //        required: true,
  //        default: 0
  //      }
  //    }

  // 2. Uso: Dentro del componente hijo, puedes acceder a las props como variables locales.
  //    Ejemplo:
  //    <template>
  //      <div>{{ count }}</div>
  //    </template>

  // 3. Envío: Desde el componente padre, se pasan los valores de las props al hijo usando atributos.
  //    Ejemplo:
  //    <Counter :count="10" />

  // Notas importantes:
  // - Las props son de solo lectura en el componente hijo.
  // - Si necesitas modificar una prop, crea una copia local o usa eventos para comunicar cambios al padre.
  // - Puedes validar el tipo, requerimiento y valor por defecto de cada prop.

  // Referencia oficial: https://vuejs.org/guide/components/props.html



// const counter = ref<number>(props.value);
// const square = computed(() => counter.value * counter.value);
</script>

<style scoped>
h1 {
  color: red;
}
</style>
