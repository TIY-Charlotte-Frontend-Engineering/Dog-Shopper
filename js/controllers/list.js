module.exports = {
    name: 'ProductListController',
    func: function ($scope, ProductService) { // may need $stateParams, not sure yet

        ProductService.getAllItems().then(function (results) {
            let allItems = [];
            for (let i = 0; i < results.length; i++) {
                allItems.push(results[i]);
            }
            $scope.allItems = allItems;
        });
    },
}

// app.controller('ProductListController', function ($scope, ProductService) {



// });
