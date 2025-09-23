import { computed, ref } from "vue";

export const useCounter=(initialValue: number = 5)=>{
const counter = ref<number>(initialValue);
const square = computed(() => counter.value * counter.value);

  return{
    counter,
    square
  }
}
