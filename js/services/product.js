app.factory('ProductService', function ($http) {

    const searchResults = [];

    return {
<<<<<<< HEAD
        searchProduct(name) {
            const product = {
                productName: productName, 
                pic: null, 
            }; 
            products.push(product); 
=======
        addSearchResults(searchString) {

            $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                // populate 'searchResults' using the results from the get request
            });
>>>>>>> 4b91426ba102fed7979e0fe3348af2e7879b968f
        }, 

        getSearchResults() {
            return searchResults; 
        } 
    }; 
}); 