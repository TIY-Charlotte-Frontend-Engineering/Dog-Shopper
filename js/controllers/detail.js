module.exports = {
    name: 'ProductDetailController',
    func: function ($scope, $stateParams, ProductService) { 

        console.log($stateParams.productId);

        $scope.details = function(id){
            ProductService.getOneItem($stateParams.id);
        }
    },
}