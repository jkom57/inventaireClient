import { defineStore } from 'pinia'
import idb from '../api/bd';

export const useInventoryStore = defineStore({
    id: "products",
    state: () => ({
        products: [],
    }),
    actions: {
        async deleteProduct(product : any) {
            console.log('store is being asked to delete '+product.id);
            await idb.deleteProduct(product); 
        },
        async getProducts(context : any) {
            context.state.products = [];
            let products = await idb.getProdcuts();
            this.products.forEach((p : any) => {
                context.state.products.push(p);
            });
        },
        async saveProduct(product : any) {
            await idb.saveProduct(product);
        }
    }
})