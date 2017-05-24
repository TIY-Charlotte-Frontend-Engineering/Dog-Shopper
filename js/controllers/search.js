module.exports = {
    name: 'SearchboxController',
    func: function ($http) { // may need $stateParams, not sure yet

        $scope.search_string = '';
        
        $scope.search = function(search_string){
            console.log('searching');
            ProductService.addSearchResults($scope.search_string);
            $scope.search_string = '';
        }

        $scope.results = ProductService.getSearchResults();

    },
}

