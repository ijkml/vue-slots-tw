<script setup lang="ts">
defineProps<{
  hideArrow?: boolean;
}>();

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function bubble(event: MouseEvent) {
  emit('click', event);
}
</script>

<template>
  <button @click="bubble">
    <slot />

    <span v-if="!hideArrow" class="inline-block size-4 text-zinc-500 ml-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        class="size-full"
      >
        <path
          fill="currentColor"
          d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
        />
      </svg>
    </span>
  </button>
</template>
