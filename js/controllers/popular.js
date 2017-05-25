module.exports = {
    name: 'PopularProductsController',
    func: function ($scope, $stateParams, ProductService) { // may need $stateParams, not sure yet
        // $scope.searchResults = ProductService.getSearchResults()

        ProductService.getAllItems().then(function (results) {
            let popItems = [];

            for (let i = 0; i < results.length; i++) {
                if (results[i].popular === true) {
                    popItems.push(results[i]);

                };
            };
            $scope.popItems = popItems;
        });

    },
}