angular.module('Routes.User').config([
  '$routeProvider',
  function ($routeProvider) {
    if (LOGGED_IN_TYPE === 'team') {
      $routeProvider.when('/user', {
        title: '',
        templateUrl: 'user/team/home.html',
        controller: 'HomeTeamController'
      });
    }
  }
]);
