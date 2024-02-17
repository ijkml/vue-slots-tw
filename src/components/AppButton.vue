<script setup lang="ts">
import { computed, toRefs } from 'vue';

const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'other';
    small?: boolean;
  }>(),
  {
    type: 'button',
    small: false,
    variant: 'primary',
  },
);

const emit = defineEmits<{
  (e: 'click', event: any): void;
}>();

function bubble(event: any) {
  emit('click', event);
}

const { small, variant, type } = toRefs(props);

const styles = computed(() => ({
  'py-1 text-xs': small.value,
  'py-2': !small.value,
  'bg-sky-700 text-white hover:bg-sky-900': variant.value === 'primary',
  'bg-teal-700 text-white hover:bg-teal-900': variant.value === 'secondary',
  'text-zinc-800 hover:bg-zinc-200': variant.value === 'other',
}));
</script>

<template>
  <button
    :type="type"
    class="cursor-pointer px-4 rounded text-sm capitalize
    transition duration-300 font-medium"
    :class="styles"
    @click="bubble"
  >
    <slot>Submit</slot>
  </button>
</template>

<style scoped></style>
