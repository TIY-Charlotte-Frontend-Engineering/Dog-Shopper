module.exports = {
   name: 'ProductDetailController',
   func: function ($scope, ProductService) { // may need $stateParams, not sure yet
       // $scope.searchResults = ProductService.getSearchResults()
       popItems = [];
       ProductService.getAllItems().then(function (results) {
           for (let i = 0; i < results.length; i++) {
               if (results[i].popular === true) {
                   popItems.push(results[i]);
               };
           };
           $scope.popItems = results;
       })
   },
}