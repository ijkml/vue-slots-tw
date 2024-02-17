<script setup lang="ts">
import { onBeforeUnmount, onMounted, provide } from 'vue';
import { dropdownKey } from '../composables/keys';

const open = defineModel<boolean>({ default: false });
let timer: number;

function toggle() {
  clearTimeout(timer);
  open.value = !open.value;
}

function closeMenu() {
  if (open.value)
    open.value = false;
}

function hover() {
  timer = setTimeout(() => {
    open.value = true;
  }, 500);
}

function hoverLeave() {
  clearTimeout(timer);
}

provide(dropdownKey, {
  closeMenu,
});

onMounted(() => {
  // detect click outside, refactor to composable
  document.body.addEventListener('click', closeMenu);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('click', closeMenu);
});
</script>

<template>
  <div
    class="relative"
    @click.stop
    @keyup.esc="closeMenu"
    @mouseenter="hover"
    @mouseleave="hoverLeave"
  >
    <slot name="button" :toggle="toggle" />
    <slot name="menu" :is-visible="open" />
  </div>
</template>

<style scoped>
</style>
