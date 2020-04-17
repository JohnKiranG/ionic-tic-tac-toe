angular.module(messages.APP_NAME)
.controller('login', ['$scope', '$state', function($scope, $state) {
  $scope.goToCreateRoom = function() {
    $state.go('createRoom');
  }

  $scope.goToGame = function() {
    $state.go('game');
  }
}]);
