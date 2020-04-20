myApp
.controller('login', ['$rootScope','$scope', '$state', function($rootScope, $scope, $state) {
  $scope.goToCreateRoom = function() {
    $state.go('createRoom');
  }

  $scope.goToGame = function() {
    $state.go('game');
  }

  $scope.goToJoinRoom= function() {
    $state.go('joinRoom');
  }
}]);
