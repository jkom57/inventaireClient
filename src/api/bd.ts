const DB_NAME = 'inventoryDB';
const DB_VERSION = 1;
let DB : any;

export default {

	async getDb() {
		return new Promise((resolve : any, reject : any) => {

			if(DB) {
                console.log('OPENING DB', DB);
                return resolve(DB);
            }
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = (e : any) => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = (e : any) => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = (e : any) => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("inventory", { autoIncrement: true, keyPath:'id' });
			};
		});
	},
	async deleteProduct(product : any) {

		let db : any = await this.getDb();

		return new Promise((resolve : any) => {

			let trans = db.transaction(['inventory'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('inventory');
			store.delete(product.id);
		});	
	},
	async getProdcuts() {

		let db : any = await this.getDb();

		return new Promise((resolve : any) => {

			let trans : any = db.transaction(['inventory'],'readonly');
			trans.oncomplete = () => {
				resolve(products);
			};
			
			let store = trans.objectStore('inventory');
			let products : any = [];
			
			store.openCursor().onsuccess = (e : any) => {
				let cursor = e.target.result;
				if (cursor) {
					products.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async getProdcutById(id : any) {

		let db : any = await this.getDb();

		return new Promise((resolve : any) => {

			let trans : any = db.transaction(['inventory'],'readwrite');
			trans.oncomplete = () => {
				resolve(product);
			};
			
			let store = trans.objectStore('inventory');
			
			let product : any = store.get(parseInt(id))

		});
	},

	async saveProduct(product : any) {

		let db : any = await this.getDb();

		return new Promise((resolve : any) => {

			let trans = db.transaction(['inventory'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('inventory');
			store.put(product);

		});
	
	}

}