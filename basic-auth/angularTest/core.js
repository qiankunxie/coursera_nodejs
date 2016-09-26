angular.module('myapp', [])
  .controller('Controller1', ['$scope', function($scope) {
    $scope.name = 'qiankun';
    $scope.$on("test", function(event, data){
      console.log(event);
console.log(data);

    })
  }])
  .controller('Controller2', ['$scope', function($scope) {
    $scope.name = 'ssice';
    $scope.emit = function() {
      $scope.$emit("test", "a");
    }
  }])
