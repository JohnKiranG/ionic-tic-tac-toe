angular.module(messages.APP_NAME)
.controller('login', ['$scope', '$state', function($scope, $state) {
  $scope.goToCreateRoom = function() {
      console.log("called");
      $state.go('createRoom');
    }
}]);
