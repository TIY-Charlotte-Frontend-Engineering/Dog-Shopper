(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('DogShopperApp', ['ui.router']);

const controllers = [
    require('./controllers/search'),
    require('./controllers/review'),
    require('./controllers/list'),
    require('./controllers/popular'),
    require('./controllers/detail'),
    require('./controllers/cart'),
    require('./controllers/add-cart'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

const services = require('./services/product');
const cartService = require('./services/cart');

app.factory(services.name, services.func);
app.factory(cartService.name, cartService.func);

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'homePage',
    });
    $stateProvider.state({
        name: 'results',
        url: '/results',
        component: 'productResults',
    });
    $stateProvider.state({
        name: 'details',
        url: '/details/:productId',
        component: 'productDetails',
    });
    $stateProvider.state({
        name: 'cart',
        url: '/cart',
        component: 'shoppingCart',
    });

});

app.component('homePage', {
    templateUrl: 'templates/home.html',
    controller: 'SearchboxController',
});

app.component('productResults', {
    templateUrl: 'templates/results.html',
    controller: 'ProductListController',
});

app.component('productDetails', {
    templateUrl: 'templates/details.html',
    controller: 'ProductDetailController',
});

app.component('shoppingCart', {
    templateUrl: 'templates/cart.html',
    controller: 'ShoppingCartController',
});

app.component('searchBox', {
    templateUrl: 'templates/search.html',
    controller: 'SearchboxController',
    bindings: {
        who: '<', 
    }
});

app.component('popItems', {
    templateUrl: 'templates/pop-items.html',
    controller: 'PopularProductsController',
    bindings: {
        who: '<', 
    }
});

app.component('addCart', {
    templateUrl: 'templates/add-cart.html',
    controller: 'AddCartController',
    bindings: {
        who: '<',
    }
})

},{"./controllers/add-cart":2,"./controllers/cart":3,"./controllers/detail":4,"./controllers/list":5,"./controllers/popular":6,"./controllers/review":7,"./controllers/search":8,"./services/cart":9,"./services/product":10}],2:[function(require,module,exports){
module.exports = {
    name: 'AddCartController',
    func: function ($scope, CartService) { 

            $scope.add = function(item){
                console.log('item added');
                CartService.addToCart($scope.item);
            }

    },
}



},{}],3:[function(require,module,exports){
module.exports = {
    name: 'ShoppingCartController',
    func: function ($scope, CartService) { 


    },
}



},{}],4:[function(require,module,exports){
module.exports = {
    name: 'ProductDetailController',
    func: function ($scope, $stateParams, ProductService) { 

        console.log($stateParams.productId);

        $scope.details = function(id){
            ProductService.getOneItem($stateParams.id);
        }
    },
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'ProductListController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

        $scope.search = function(search_string){
            console.log('searching');
            ProductService.addSearchResults($scope.search_string);
            $scope.search_string = '';
        }

        $scope.searchItems = ProductService.getSearchResults();
    },
}

// app.controller('ProductListController', function ($scope, ProductService) {



// });

},{}],6:[function(require,module,exports){
module.exports = {
    name: 'PopularProductsController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet
        // $scope.searchResults = ProductService.getSearchResults()

        ProductService.getAllItems().then(function (results) {
            let popItems = [];

            for (let i = 0; i < results.length; i++) {
                if (results[i].popular === true) {
                    popItems.push(results[i]);

                };
            };
            $scope.popItems = popItems;
        })
    },
}
},{}],7:[function(require,module,exports){

module.exports = {
    name: 'ReviewController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

    },
}


// app.controller('ReviewController', function ($scope, ProductService) {



// });
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'SearchboxController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

        $scope.search_string = '';

        $scope.search = function(search_string){
            console.log('searching');
            ProductService.addSearchResults($scope.search_string);
            $scope.search_string = '';
        }

        $scope.results = ProductService.getSearchResults();

    },
}


},{}],9:[function(require,module,exports){
module.exports = {
    name: 'CartService',
    func: function ($http) {

        const cartItems = [];

        return {
            addToCart(item){
                cartItems.push(item);
            },

            getCart(){
                return cartItems;
            },
        };
    },
};
},{}],10:[function(require,module,exports){
module.exports = {
    name: 'ProductService',
    func: function ($http) {

        const searchResults = [];


        return {
            getAllItems(){

                return $http.get('https://tiy-28202.herokuapp.com/shop/items').then(function(response){
                    return response.data;
                })

            },

            addSearchResults(searchString) {

                $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                    console.log(response);
                    for(let i = 0; i < response.data.length; i++){
                        searchResults.push(response.data[i]);
                    }
                });
            },

            getSearchResults() {
                return searchResults;
            },

            getOneItem(id){
                    $http.get('https://tiy-28202.herokuapp.com/shop/items/' + id).then(function (response) {
                    console.log(response);

                });
            },
        };
    },
};




},{}]},{},[1]);
