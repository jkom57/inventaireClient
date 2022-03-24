<template>
    <div class="row">
        <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                    <div class="product-slider">
                        <img class="d-block image" :src="$data.product.image" alt="First slide">
                        <label for="Choisir une image">Coller le path URL</label>
                        <input class="form-control" v-model="$data.product.image" type="text" placeholder="Choisir une image">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                    <div class="product-details">
                        <div class="border-bottom pb-3 mb-3">
                            <h2 class="mb-3"><input type="text" v-model="$data.product.name"></h2>
                            <h3 class="mb-0 text-primary">$<input type="text" v-model="$data.product.price"></h3>
                        </div>
                        <div class="product-size border-bottom">
                            <h4>Fournisseur</h4>
                            <input type="text" v-model="$data.product.provider">
                            <div class="product-qty">
                                <h4>Quantité</h4>
                                <div class="quantity">
                                    <input type="number" v-model="$data.product.quantity">
                                </div>
                            </div>
                        </div>
                        <div class="product-description">
                            <h4 class="mb-1">Description</h4>
                            <textarea rows="4" cols="50" v-model="$data.product.description"></textarea>
                            <RouterLink to="/" v-on:click="updateProduct" class="btn btn-primary btn-block btn-lg">Sauvegarder</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import router from '../router/index'
import { useInventoryStore } from '../stores/store'

export default {
    data: function () : any {
        return {
            id : router.currentRoute.value.params.id,
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
        },
        async updateProduct () {
            const inventoryStore = useInventoryStore()
            const product = inventoryStore.updateProduct(this.$data.id, this.$data.product)
            console.log(product)
            console.log('modifier')
        }
    }
}
</script>

<style scoped>
.image {
    max-width: 275px;
}
</style>
