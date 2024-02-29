class ProductManager {

    constructor() {
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(title, description, price, img, code, stock){

        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }


        if(this.products.some(item => item.code === code)) {
            console.log("El codigo debe ser unico.");
            return; 
        }

        const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
        
        const newProduct = {
            id,
            title,
            description,
            price, 
            img,
            code,
            stock
        }

        this.products.push(newProduct);
    }

    getProductById(id){
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.log("Producto no encontrado.");
        } else {
            console.log("Producto encontrado.", product);
        }
    }
}

//Testing: 
//1) Se creará una instancia de la clase “ProductManager”

const manager = new ProductManager(); 

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(manager.getProducts());

//3) Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

manager.addProduct("producto prueba", "este es un producto prueba", 200, "sin imagen", "123456", 25);

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

//4)Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

manager.addProduct("vans clasic", "las mas lindas", 300, "sin imagen", "234567", 50);

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

manager.addProduct("vans bota", "las mas linas pero formato botita", 400, "sin imagen", "345678", 75);

console.log(manager.getProducts());

//5)Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

manager.getProductById("lt7u2qlvts1hm");
manager.getProductById("lt7u2qlvts23m");

//no puedo probar lo del id por que es aleatorio

