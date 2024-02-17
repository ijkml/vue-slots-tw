<script setup lang="ts">
import ListWrapper from './components/ListWrapper.vue';
import ListItem from './components/ListItem.vue';
import ListHeader from './components/ListHeader.vue';
</script>

<template>
  <main class="app-cont">
    <h1 class="text-[2rem] tracking-tight font-medium mb-4">
      Products
    </h1>

    <ListWrapper>
      <template #header>
        <ListHeader />
      </template>

      <template #items="{ ...item }">
        <ListItem v-bind="item" />
      </template>
    </ListWrapper>
  </main>
</template>

<style scoped>
.app-cont {
  @apply text-zinc-800 w-full mx-auto my-0 pt-[4rem] pb-[12rem]
    max-w-screen-md px-4 min-h-screen sm:px-6 md:px-8;
}
</style>
