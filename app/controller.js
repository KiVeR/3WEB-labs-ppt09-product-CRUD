myApp.controller("ProductsCtrl", function($scope) {

    $scope.product = {};

    $scope.products = [
        new Product("A product", "A description", 10),
        new Product("A second product", "A second description", 5),
        new Product("A third product", "A third description", 7)
    ];

    $scope.addProduct = function () {
        $scope.products.push({
          name: $scope.product.name,
          desc: $scope.product.desc,
          price: parseInt($scope.product.price)
        });
        $scope.product = '';
    };

    $scope.editProduct = function(index){
        $scope.product = $scope.products[index];
        $scope.edit = true;
    };

    $scope.updateProduct = function(index){
        $scope.product = {};
        $scope.edit = false;
    };

    $scope.deleteProduct = function(index){
        $scope.products.splice(index, 1);
    };

    $scope.order = 'name';
    $scope.limitToNumber = 3;
});