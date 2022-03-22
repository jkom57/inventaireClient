<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/navbar.vue";
</script>

<template>
  <div class="pt-5">
    <NavBar />
    <RouterView />
  </div>
</template>

<style>

</style>
