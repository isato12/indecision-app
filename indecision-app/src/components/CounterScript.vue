/** * Manual de Estudio: Componente de forma tradicional de un Contador con Vue 3 y TypeScript * *
Este componente implementa un contador interactivo utilizando la Composition API de Vue 3. * *
Estructura del template: * - Muestra el valor actual del contador (`counter`). * - Muestra el
cuadrado del contador (`square`), calculado automáticamente. * - Incluye dos botones para
incrementar y decrementar el contador. * * Lógica en
<!-- *<script>:
 export default
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
    <h3>Square: {{ square }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({



  props: {
    value: {type: Number, required: true},
  },

  setup( props ) {
    const{counter, square} = useCounter(props.value);
    // const props = defineProps<{ value: number }>();

    // const counter = ref<number>(props.value);
    // const counter = ref(5);
    // const counter = ref(props.value);
    // const square = computed(() => counter.value * counter.value);

    return {
      counter,
      square,
    };
  },
});
</script>
