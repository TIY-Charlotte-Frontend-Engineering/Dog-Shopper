(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('DogShopperApp', ['ui.router']);

const controllers = [
    require('./controllers/search'),
    require('./controllers/review'),
    require('./controllers/list'),
    require('./controllers/popular'),
    require('./controllers/detail'),
    require('./controllers/cart'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

const services = require('./services/product');

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
        url: '/details/:productName',
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


// app.controller('SearchboxController', function ($scope, ProductService) {



// }); 

// app.controller('ProductListController', function ($scope, ProductService) {



// });

// app.controller('PopularProductsController', function ($scope, ProductService) {



// });

// app.controller('ProductDetailController', function ($scope, ProductService) {



// });

// app.controller('ShoppingCartController', function ($scope, ProductService) {



// });

// app.controller('ReviewController', function ($scope, ProductService) {



// });

// app.factory('ProductService')



},{"./controllers/cart":2,"./controllers/detail":3,"./controllers/list":4,"./controllers/popular":5,"./controllers/review":6,"./controllers/search":7,"./services/product":8}],2:[function(require,module,exports){

module.exports = {
    name: 'ShoppingCartController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

    },
}


// app.controller('ShoppingCartController', function ($scope, ProductService) {



// });
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'ProductDetailController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

    },
}


// app.controller('ProductDetailController', function ($scope, ProductService) {



// });


},{}],4:[function(require,module,exports){
module.exports = {
    name: 'ProductListController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet
        
    },
}

// app.controller('ProductListController', function ($scope, ProductService) {



// });

},{}],5:[function(require,module,exports){

module.exports = {
    name: 'PopularProductsController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

    },
}


// app.controller('PopularProductsController', function ($scope, ProductService) {



// });


},{}],6:[function(require,module,exports){

module.exports = {
    name: 'ReviewController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

    },
}


// app.controller('ReviewController', function ($scope, ProductService) {



// });
},{}],7:[function(require,module,exports){

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

// app.controller('SearchboxController', function ($scope, ProductService) {



// });
},{}],8:[function(require,module,exports){
module.exports = {

    name:'ProductService', 
    func: function ($http) {

        const searchResults = [];

        return {
            addSearchResults(searchString) {

                $http.get('https://tiy-28202.herokuapp.com/shop/search?q=' + searchString).then(function (response) {
                    // populate 'searchResults' using the results from the get request
                });
            },

            getSearchResults() {
                return searchResults;
            }
        };
    }, 
}
},{}]},{},[1]);
