<script setup lang="ts">
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';

function action(msg: string) {
  // eslint-disable-next-line no-console
  console.info(msg);
}
</script>

<template>
  <div class="grid gap-y-3 gap-x-8 sm:grid-cols-2">
    <form class="form-wrap" @submit.prevent="action('search product')">
      <AppInput
        id="find-product"
        label="Find a Product"
        no-label
        class="form-input"
      />
      <AppButton type="submit" class="form-btn">
        Search
      </AppButton>
    </form>

    <form class="form-wrap" @submit.prevent="action('add product')">
      <AppInput
        id="product-name"
        label="Product Name"
        no-label
        class="form-input"
      />
      <AppButton type="submit" variant="secondary" class="form-btn">
        Add Product
      </AppButton>
    </form>
  </div>
</template>

<style scoped>
.form-btn {
  @apply shrink-0 grow-0;
}

.form-input {
  @apply shrink grow;
}

.form-wrap {
  @apply flex items-stretch gap-2 sm:grid;
}
</style>
