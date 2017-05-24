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

app.factory(services.name, services.func);

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
