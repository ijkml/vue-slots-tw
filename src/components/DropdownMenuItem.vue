<script setup lang="ts">
import { inject } from 'vue';
import type { DropdownUtils } from '../composables/keys';
import { dropdownKey } from '../composables/keys';

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
  (e: 'closeMenu'): void;
}>(); ;

const { closeMenu } = inject<DropdownUtils>(dropdownKey) as DropdownUtils;

function bubble(event: MouseEvent) {
  emit('click', event);
  closeMenu();
}
</script>

<template>
  <li @click="bubble">
    <slot />
  </li>
</template>
