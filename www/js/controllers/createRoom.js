myApp
.controller('createRoom', ['$scope', '$state', '$firebaseArray', function($scope, $state, $firebaseArray) {

    // var fireRef = new Firebase(DB_CONFIG);
    // $scope.game = $firebaseArray(fireRef);
    console.log("called");

    $scope.showRoomNo = false;
    $scope.player1 = "j";

    $scope.generateRoomId = function() {
        const config = {
            apiKey: "AIzaSyDyqhwjpF5Q_PJGakdGOR6VtsE92ZkX2TM",
            authDomain: "tic-tac-toe-e0e48.firebaseapp.com",
            databaseURL: "https://tic-tac-toe-e0e48.firebaseio.com/"
        };
    
        firebase.initializeApp(config);
        var rootRef = firebase.database().ref();
        $scope.game = $firebaseArray(rootRef);

        var tt = $scope.game.$add({
			player1: $scope.player1,
			roomId: 1
        });

        console.log(tt);
        
        $scope.roomNo = 1;
        $scope.showRoomNo = true;

        $scope.game.$ref().once('value', function(obj) {
            angular.forEach(obj.val(), function(user) {
                console.log(user.roomId);
            });
        });
    }

    
}]);
