<script setup lang="ts">
import { ref } from 'vue';
import type { StatusColor } from '../assets/types';

const props = defineProps<{
  status: StatusColor;
}>();

const status = ref<StatusColor>(props.status);

function toggle() {
  let next: StatusColor = 'green';

  switch (status.value) {
    case 'green':
      next = 'yellow';
      break;
    case 'yellow':
      next = 'red';
      break;
    case 'red':
      next = 'green';
      break;
  }

  status.value = next;
};
</script>

<template>
  <button
    :class="status"
    class="inline-block size-[1.125rem] transition cursor-pointer"
    @click="toggle"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="size-full"
    >
      <path fill="currentColor" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
    </svg>
  </button>
</template>

<style scoped>
.green {
  @apply text-green-700;
}
.yellow {
  @apply text-yellow-600;
}
.red {
  @apply text-red-700;
}
</style>
