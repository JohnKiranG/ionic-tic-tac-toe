myApp
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        cache: false,
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'login'
      })
      .state('createRoom', {
        cache: false,
        url: '/createRoom',
        templateUrl: 'templates/createRoom.html',
        controller: 'createRoom'
      })
      .state('joinRoom', {
        cache: false,
        url: '/joinRoom',
        templateUrl: 'templates/joinRoom.html',
        controller: 'joinRoom'
      })
      .state('game', {
        cache: false,
        url: '/game',
        templateUrl: 'templates/tic-tac-toe.html',
        controller: 'gameController'
      })

    $urlRouterProvider.otherwise('/login');
  })
