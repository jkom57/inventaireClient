<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <div class="row">
                    <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div class="row">
                            <div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div class="product-thumbnail">
                                    <div class="product-img-head">
                                        <div class="product-img">
                                            <img :src="image" alt="" class="img-fluid">
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-content-head">
                                            <h3 class="product-title">{{ name }}</h3>
                                            <div class="product-price">${{ price }}</div>
                                        </div>
                                        <div class="product-btn">
                                            <RouterLink :to="'/modification/'+id" class="btn btn-primary">Modifier</RouterLink>
                                            <RouterLink :to="'/produit/'+id" class="btn btn-outline-light">Détails</RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    id: number,
    name: string,
    price: string,
    image: string,
}>();
</script>

<style scoped>

</style>
