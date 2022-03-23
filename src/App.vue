<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import bd from './api/bd';
import NavBar from "./components/NavBar.vue";
import { useInventoryStore } from './stores/store'
var db : any
var products : any = []
export default {
  components: {
    NavBar,
  },
  created () {
    db = bd.getDb()
    products = useInventoryStore().getProducts()
    //products = useInventoryStore().$state.products
    //console.log(products)
  },
}
</script>

<template>
  <div class="pt-5">
    <NavBar />
    <RouterView />
  </div>
</template>

<style>

</style>
