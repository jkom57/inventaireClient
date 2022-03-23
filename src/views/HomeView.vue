<script setup lang="ts">
import ProductVue from '../components/Product.vue';
import { useInventoryStore } from '../stores/store';

const inventoryStore = useInventoryStore()
const products = inventoryStore.$state.products
</script>

<template>
  <main>
    <ProductVue v-for="product in products"
      :key="product" :name="product.name"
      :price="product.price" :image="product.image"
      :id="product.id"
    />
  </main>
</template>
