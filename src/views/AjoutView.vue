<template>
    <div class="row">
        <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pr-xl-0 pr-lg-0 pr-md-0  m-b-30">
                    <div class="product-slider">
                        <img class="d-block" src="../assets/images/eco-slider-img-1.png" alt="First slide">
                        <label for="Choisir une image">Coller le path URL</label>
                        <input class="form-control" v-model="product.image" type="text" placeholder="Choisir une image">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pl-xl-0 pl-lg-0 pl-md-0 border-left m-b-30">
                    <div class="product-details">
                        <div class="border-bottom pb-3 mb-3">
                            <h2 class="mb-3"><input type="text" v-model="product.name" placeholder="Nom du produit" ></h2>
                            <h3 class="mb-0 text-primary">$<input type="number" min="0" step="any" v-model="product.price"></h3>
                        </div>
                        <div class="product-size border-bottom">
                            <h4>Fournisseur</h4>
                            <input type="text" v-model="product.provider" placeholder="Fournisseur">
                            <div class="product-qty">
                                <h4>Quantité</h4>
                                <div class="quantity">
                                    <input type="number" v-model="product.quantity">
                                </div>
                            </div>
                        </div>
                        <div class="product-description">
                            <h4 class="mb-1">Description</h4>
                            <textarea rows="4" cols="50" v-model="product.description"></textarea>
                            <RouterLink to="/" v-on:click="addProduct()" class="btn btn-primary btn-block btn-lg">Sauvegarder</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useInventoryStore } from '../stores/store';

const inventoryStore = useInventoryStore()

var product = {
    name: '',
    price: 0.00,
    provider: '',
    quantity: 1,
    description: '',
    image: '../assets/images/eco-product-img-1.png'
}

function addProduct () {
    inventoryStore.saveProduct(product)
}
</script>

<style scoped>

</style>
