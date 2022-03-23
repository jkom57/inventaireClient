<template>
    <div class="dashboard-wrapper">
            <div class="dashboard-ecommerce">
                <div class="container-fluid dashboard-content ">
                    <div class="row">
                        <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                                    <div class="product-slider">
									    <img class="d-block" src="../assets/images/eco-slider-img-1.png" alt="First slide">
                                        
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                                    <div class="product-details">
                                        <div class="border-bottom pb-3 mb-3">
                                            <h2 class="mb-3">Produit #1</h2>
                                            <!--<h2 class="mb-3">{{ product.name }}</h2>-->
                                            <h3 class="mb-0 text-primary">$49.00</h3>
                                        </div>
                                        <div class="product-size border-bottom">
                                            <h4>Fournisseur</h4>
                                            ACME Inc.
                                            <div class="product-qty">
                                                <h4>Quantité</h4>
                                                <div class="quantity">
                                                    1
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-description">
                                            <h4 class="mb-1">Description</h4>
                                            <p>Praesent et cursus quam. Etiam vulputate est et metus pellentesque iaculis. Suspendisse nec urna augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                                            <RouterLink to="/modification/1" class="btn btn-primary btn-block btn-lg">Modifier</RouterLink>
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
import { useInventoryStore } from '../stores/store';
import router from '../router/index'
import { onMounted } from 'vue';

//console.log(router.currentRoute.value.params.id)
//var id : any// = router.currentRoute.value.params.id

//var inventoryStore : any //= useInventoryStore()
//inventoryStore.getProductById(id)
//var prod : any = {}
//var product : any = {}
//console.log(id)
//console.log(product)

var id : any
var inventoryStore : any
var prod : any
var product : any

export default {
    async data () {
        product
    },
    setup () {
        onMounted (async () => {
            id = router.currentRoute.value.params.id
            inventoryStore = await useInventoryStore()
            await inventoryStore.getProductById(id)
            prod = await inventoryStore.$state.product
            //console.log(prod.result)
            product = prod.result
            //console.log(product.name)
            product = {
                id,
                name : product.name,
                price: product.price,
                provider: product.provider,
                quantity: product.quantity,
                description: product.description,
                image: product.image,
            }
            console.log(product)
        })
    },
}
</script>

<style scoped>

</style>
