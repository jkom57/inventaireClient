<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
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
