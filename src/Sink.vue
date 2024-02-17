<script setup lang="ts">
import AppButton from './components/AppButton.vue';
import AppInput from './components/AppInput.vue';
import Status from './components/Status.vue';

import ListWrapper from './components/ListWrapper.vue';
import ListItem from './components/ListItem.vue';
</script>

<template>
  <div class="app-cont">
    <div>
      <AppButton>Go! go go!</AppButton>
    </div>

    <div class="p-8 gap-8 grid justify-items-start">
      <AppButton type="submit">
        Search
      </AppButton>

      <AppButton variant="secondary" type="submit">
        Add Product
      </AppButton>

      <AppButton variant="secondary" type="submit" small>
        Replace
      </AppButton>

      <AppButton variant="other" small>
        Clear
      </AppButton>

      <AppInput id="test-input" label="Test Input" />

      <AppInput id="test-input-no-label" label="Test Input No Label" no-label />

      <Status state="green" />
      <Status state="yellow" />
      <Status state="red" />
    </div>

    <div>
      <ListWrapper>
        <template #item="{ ...item }">
          <ListItem v-bind="item" />
        </template>
      </ListWrapper>
    </div>
  </div>
</template>

<style scoped>
.app-cont {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
