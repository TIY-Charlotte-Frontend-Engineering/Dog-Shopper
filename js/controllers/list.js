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
