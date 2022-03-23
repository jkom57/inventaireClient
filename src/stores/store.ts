import { defineStore } from 'pinia'
import idb from '../api/bd';

export const useInventoryStore = defineStore('products', {
    state: () => ({
        db: null,
        products: [1],
        product: {}
    }),
    actions: {
        async deleteProduct(product : any) {
            console.log('store is being asked to delete '+product.id);
            await idb.deleteProduct(product); 
        },
        async getProducts() {
            this.$state.products = [];
            let products : any = await idb.getProdcuts();
            products.forEach((p : any) => {
                this.$state.products.push(p);
            });
        },
        async getProductById(id : any) {
            this.$state.product = {};
            let product : any = await idb.getProdcutById(id);
            this.$state.product = product
        },
        async saveProduct(product : any) {
            /*product = {
                id: 1,
                name: 'SanDisk Ultra 128GB microSDXC UHS-I Memory Card 120MB/s Micro SD Card SDSQUA4-128G',
                price: '18.99',
                provider: 'SanDisk',
                quantity: '1',
                description: 'Read speed of up to 120MB/s (based on SanDisk internal testing; performance may be lower depending on host device) ensure that you can move all your content blazingly fast—up to 1000 photos in just one minute. Ideal for Android-based smartphones and tablets, this card’s A1 rating means that you can load apps faster too.',
                image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6346/6346815_sd.jpg'
            }*/
            await idb.saveProduct(product);
        }
    }
})