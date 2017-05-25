module.exports = {
    name: 'ProductDetailController',
    func: function ($scope, $stateParams, ProductService) { 

        console.log($stateParams.productId);

        $scope.item = ProductService.getOneItem($stateParams.productId);

    },
}