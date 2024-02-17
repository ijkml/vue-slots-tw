<script setup lang="ts">
import { computed, reactive, toRefs } from 'vue';
import type { InputHTMLAttributes } from '../assets/input-type';

const props = withDefaults(
  defineProps<
    InputHTMLAttributes & {
      label: string;
      id: string;
      noLabel?: boolean;
    }
  >(),
  {
    noLabel: false,
    type: 'text',
  },
);

const { label, id, placeholder, noLabel, type, ...attrsRef } = toRefs(props);

const attrs = reactive(attrsRef);

const resolvedPlaceholder = computed(() => {
  return noLabel.value ? label.value : placeholder.value || label.value;
});
</script>

<template>
  <div>
    <label
      v-if="!noLabel"
      :for="id"
      class="block text-sm font-medium leading-6 text-zinc-900"
      v-text="label"
    />

    <input
      v-bind="attrs"
      :id="id"
      :type="type"
      :placeholder="resolvedPlaceholder"
      class="base-input"
      :class="{ 'mt-2': !noLabel }"
    >
  </div>
</template>

<style scoped>
.base-input {
  @apply block border-0 bg-transparent p-1.5 rounded
    text-zinc-900 shadow-sm ring-1 ring-zinc-500
    sm:text-sm sm:leading-6 text-sm w-full min-h-8 h-full;

  &:hover {
    @apply bg-zinc-100;
  }

  &::placeholder {
    @apply text-zinc-600;
  }

  &:focus {
    @apply ring-sky-800 ring-2 bg-zinc-100;
  }
}
</style>
