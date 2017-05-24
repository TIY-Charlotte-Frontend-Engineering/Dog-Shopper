
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