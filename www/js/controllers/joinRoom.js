myApp
.controller('joinRoom', ['$scope', '$state', '$firebaseArray', function($scope, $state, $firebaseArray) {

    $scope.playerTwo;
    $scope.roomNumber;

    $scope.validate = function() {
        firebase.initializeApp(DB_CONFIG);
        var rootRef = firebase.database().ref();
        $scope.game = $firebaseArray(rootRef);

        $scope.game.$ref().once('value', function(obj) {
            angular.forEach(obj.val(), function(user) {
                if(user.roomId.toString() === $scope.roomNumber) {
                    alert("Success");
                }
            });
        });
    }
    
}]);
