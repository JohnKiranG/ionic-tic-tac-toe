angular.module(messages.APP_NAME)
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
      // .state('form', {
      //   cache: false,
      //   url: '/form',
      //   templateUrl: 'templates/formPage.html',
      //   controller: 'formController'
      // })

    $urlRouterProvider.otherwise('/login');
  })
