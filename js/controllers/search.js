
module.exports = {
    name: 'SearchboxController',
    func: function ($scope, DogProductService) {
        $scope.product_name = '';
        $scope.add() = function () {
            DogProductService.addProduct($scope.product_name);
        };
    },
}