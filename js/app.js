const app = angular.module('DogShopperApp', ['ui.router']);

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


