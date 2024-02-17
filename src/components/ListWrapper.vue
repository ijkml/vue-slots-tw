<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import ApiData from '../assets/data.json';
import type { DataItem } from '../assets/types';
import Dropdown from './Dropdown.vue';
import DropdownMenu from './DropdownMenu.vue';
import MenuBtn from './DropdownButton.vue';
import MenuItem from './DropdownMenuItem.vue';
import MenuTransition from './MenuTransition.vue';

const sortOptions = ['a - z', 'z - a', 'latest', 'oldest', 'none'] as const;
const perPageOptions = [10, 25, 50] as const;

type SortType = (typeof sortOptions)[number];
type PaginationType = (typeof perPageOptions)[number];

const perPage = ref<PaginationType>(10);
const currentPage = ref(1);
const sort = ref<SortType>('none');

const numPages = computed(() => {
  return Math.ceil(ApiData.length / perPage.value);
});

const sorters: Record<SortType, (data: DataItem[]) => DataItem[]> = {
  'a - z': data => data.sort((a, b) => a.name.localeCompare(b.name)),
  'z - a': data => data.sort((a, b) => -1 * a.name.localeCompare(b.name)),
  'oldest': data => data.sort((a, b) => (a.date || 0) - (b.date || 0)),
  'latest': data => data.sort((a, b) => (a.date || 0) - (b.date || 0)).reverse(),
  'none': data => data,
};

const sortedData = computed(() => {
  return sorters[sort.value](ApiData.slice());
});

const theView = computed(() => {
  return sortedData.value.slice(0, perPage.value);
});

function setSort(opt: SortType) {
  sort.value = opt;
}

function setPerPage(opt: PaginationType) {
  perPage.value = opt;
}

const pageMenuOpen = defineModel<boolean>('page');
const sortMenuOpen = defineModel<boolean>('sort');
pageMenuOpen.value = false;
sortMenuOpen.value = false;

watch(pageMenuOpen, () => {
  if (pageMenuOpen.value)
    sortMenuOpen.value = false;
});

watch(sortMenuOpen, () => {
  if (sortMenuOpen.value)
    pageMenuOpen.value = false;
});
</script>

<template>
  <div>
    <div class="bg-white p-4 rounded-md shadow">
      <div>
        <slot name="header" />
      </div>

      <ul class="mt-4 grid md:grid-cols-2 md:gap-x-8 md:mt-8">
        <li
          v-for="(item, id) in theView"
          :key="item.name + id + item.status + item.date"
          class="border-b"
        >
          <slot name="items" v-bind="item" />
        </li>
      </ul>
    </div>

    <div class="list-footer">
      <div>
        Page <span class="font-semibold" v-text="currentPage" /> of
        <span class="font-semibold" v-text="numPages" />
      </div>

      <Dropdown v-model="sortMenuOpen">
        <template #button="{ toggle }">
          <MenuBtn
            class="inline-flex items-center px-4 py-2"
            hide-arrow
            @click="toggle"
          >
            Sort by: &nbsp;<span class="font-semibold capitalize" v-text="sort" />
          </MenuBtn>
        </template>
        <template #menu="{ isVisible }">
          <MenuTransition>
            <DropdownMenu :is-visible="isVisible">
              <MenuItem v-for="s in sortOptions" :key="s" @click="setSort(s)">
                <button class="block w-full p-2 hover:bg-zinc-200 capitalize">
                  {{ s }}
                </button>
              </MenuItem>
            </DropdownMenu>
          </MenuTransition>
        </template>
      </Dropdown>

      <Dropdown v-model="pageMenuOpen">
        <template #button="{ toggle }">
          <MenuBtn
            class="inline-flex items-center font-semibold px-4 py-2"
            @click="toggle"
          >
            {{ perPage }}
          </MenuBtn>
        </template>
        <template #menu="{ isVisible }">
          <MenuTransition>
            <DropdownMenu :is-visible="isVisible">
              <MenuItem
                v-for="pp in perPageOptions"
                :key="pp"
                @click="setPerPage(pp)"
              >
                <button class="block w-full p-2 hover:bg-zinc-200">
                  {{ pp }}
                </button>
              </MenuItem>
            </DropdownMenu>
          </MenuTransition>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style scoped>
.list-footer {
  @apply text-xs flex px-4 py-2 mt-2 items-center justify-between;
}
</style>
