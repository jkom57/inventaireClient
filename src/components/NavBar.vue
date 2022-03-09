<template>
    <div class="navbar">
        <div class="title">
            <h1 class="titleText">
                Inventaire
            </h1>
        </div>
        <div class="recherche">
            <input type="text" placeholder="Search..">
        </div>
        <div class="button">
            <CirclePlusIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import Vue from 'vue'
import CirclePlusIcon from "../components/icons/iconPlusCircle.vue"
/*export default Vue.extend({
    
})*/
</script>

<style scoped>
.navbar {
    background-color: rgb(73, 43, 19);
    width: 100%;
}
.titleText {
    color: white;
    font-weight: bold;
    font-size: xx-large
}
</style>