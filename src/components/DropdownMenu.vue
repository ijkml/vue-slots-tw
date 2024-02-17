<script setup lang="ts">
defineProps<{
  isVisible: boolean;
}>();
</script>

<template>
  <ul v-if="isVisible" class="z-10 bg-white divide-y divide-zinc-100 rounded shadow w-full absolute right-0 max-w-full py-1 text-xs font-medium text-zinc-700">
    <slot />
  </ul>
</template>
