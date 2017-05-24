app.factory('ProductService', function ($http) {
    const products = [];

    return {
        searchProduct(name) {
            const product = {
                productName: productName, 
                pic: null, 
            }; 
            products.push(product); 
        }, 

        getProducts() {
            return products; 
        } 
    }; 
}); 