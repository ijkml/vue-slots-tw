<script setup lang="ts">
import { computed, ref } from 'vue';
import type { DataItem } from '../assets/types';
import Indicator from './Indicator.vue';
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';

const props = defineProps<DataItem>();

const src = computed(() => props.image || 'https://picsum.photos/123');

const date = computed(() => {
  const dateRaw = props.date;

  if (!dateRaw)
    return null;

  const dateObj = new Date(dateRaw);

  return new Intl.DateTimeFormat('en-gb', {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  }).format(dateObj);
});

const editMenuOpen = ref(false);

function toggleEdit() {
  editMenuOpen.value = !editMenuOpen.value;
}

const inputs = [
  { id: 'image-title', label: 'Image Title' },
  { id: 'alt-text', label: 'Alt Text' },
  { id: 'img-link', label: 'Image Link' },
];
</script>

<template>
  <div>
    <div class="flex items-center select-none py-3 gap-2 text-sm leading-normal">
      <div class="size-7 rounded-sm overflow-hidden flex-shrink-0 flex-grow-0">
        <img :src="src" alt="" class="object-cover object-center size-full">
      </div>

      <Indicator :status="status" class="shrink-0 grow-0" />

      <div class="mr-1">
        <h4>{{ name }}</h4>
      </div>

      <div class="ml-auto shrink-0 grow-0">
        <span v-if="date">{{ date }}</span>
      </div>

      <span
        class="inline-block size-6 flex-grow-0
        flex-shrink-0 text-zinc-500 transition"
        :class="{ '-rotate-180': editMenuOpen }"
        @click="toggleEdit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16" height="16"
          viewBox="0 0 24 24"
          class="size-full"
        >
          <path
            fill="currentColor"
            d="M12 14.975q-.2 0-.375-.062T11.3
            14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9
            3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6
            4.6q-.15.15-.325.213t-.375.062Z"
          />
        </svg>
      </span>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <form
        v-if="editMenuOpen"
        class="my-4 space-y-4"
        @submit.prevent
      >
        <div class="grid items-center gap-4 grid-cols-2">
          <div>
            <img
              :src="src" alt=""
              class="aspect-1 w-full object-cover
              object-center max-w-[200px]"
            >
          </div>
          <div
            class="flex items-center justify-center flex-wrap gap-4"
          >
            <AppButton small type="submit">
              Replace
            </AppButton>
            <AppButton small variant="other" type="reset">
              Clear
            </AppButton>
          </div>
        </div>
        <div class="grid gap-4">
          <div v-for="input in inputs" :key="input.id">
            <AppInput v-bind="input" />
          </div>
        </div>
      </form>
    </Transition>
  </div>
</template>

<style scoped>
</style>
