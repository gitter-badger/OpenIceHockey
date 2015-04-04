angular.module('Routes.User').config([
  '$routeProvider',
  function ($routeProvider) {
    if (LOGGED_IN_TYPE === 'supporter') {
      $routeProvider.when('/user', {
        title: '',
        templateUrl: 'user/supporter/home.html',
        controller: 'HomeSuppoterController'
      });
    }
  }
]);
