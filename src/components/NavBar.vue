<template>
    <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-nav-brown fixed-top" id="nav">
            <RouterLink class="navbar-brand" to="/">Inventaire</RouterLink>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-right-top">
                    <li class="nav-item">
                        <div id="custom-search" class="top-search-bar">
                            <input class="form-control" type="text" placeholder="Search..">
                        </div>
                    </li>
                    <li class="nav-item dropdown notification">
                        <RouterLink class="nav-link nav-icons" to="/ajout" id="navbarDropdownMenuLink1"><i class="fas fa-plus-circle"></i> </RouterLink>   
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>

</style>
