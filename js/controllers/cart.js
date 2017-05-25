module.exports = {
    name: 'ShoppingCartController',
    func: function ($scope, CartService) { 

            $scope.add = function(item){
                console.log('item added');
                CartService.addToCart($scope.item);
            }

    },
}


