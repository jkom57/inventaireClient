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
                                            <img src="../assets/images/eco-product-img-1.png" alt="" class="img-fluid"></div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-content-head">
                                            <h3 class="product-title">Produit #1</h3>
                                            <div class="product-price">49</div>
                                        </div>
                                        <div class="product-btn">
                                            <RouterLink to="/modification/1" class="btn btn-primary">Modifier</RouterLink>
                                            <RouterLink to="/produit/1" class="btn btn-outline-light">Détails</RouterLink>
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

<script lang="ts">
export default {

}
</script>

<style scoped>

</style>
