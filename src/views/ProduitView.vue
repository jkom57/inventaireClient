<template>
    <div class="dashboard-wrapper">
            <div class="dashboard-ecommerce">
                <div class="container-fluid dashboard-content ">
                    <div class="row">
                        <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                                    <div class="product-slider">
									    <img class="d-block image" :src="$data.product.image" alt="First slide">
                                        
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                                    <div class="product-details">
                                        <div class="border-bottom pb-3 mb-3">
                                            <!--<h2 class="mb-3">Produit #1</h2>-->
                                            <h2 class="mb-3">{{ $data.product.name }}</h2>
                                            <h3 class="mb-0 text-primary">$49.00</h3>
                                        </div>
                                        <div class="product-size border-bottom">
                                            <h4>Fournisseur</h4>
                                            {{ $data.product.provider }}
                                            <div class="product-qty">
                                                <h4>Quantité</h4>
                                                <div class="quantity">
                                                    {{ $data.product.quantity }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-description">
                                            <h4 class="mb-1">Description</h4>
                                            <p>{{ $data.product.description }}</p>
                                            <RouterLink :to="'/modification/' + $data.product.id" class="btn btn-primary btn-block btn-lg">Modifier</RouterLink>
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
import { useInventoryStore } from '../stores/store'

export default {
    data: function () {
        return {
            id : this.$router.currentRoute.value.params.id,
            product : {}
        }
    },
    created () {
        this.getProduct()
    },
    watch: {
        $router: 'getProduct'
    },
    methods: {
        async getProduct () {
            const inventoryStore = useInventoryStore()
            const getProduct = await inventoryStore.getProductById(this.$data.id)
            this.$data.product = inventoryStore.$state.product
        }
    }
}
</script>

<style scoped>
.image {
    max-width: 275px;
}
</style>
