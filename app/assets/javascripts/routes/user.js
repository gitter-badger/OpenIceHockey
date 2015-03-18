angular.module('Routes.User').config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/user', {
      title: '',
      templateUrl: 'user/home.html'
    });
  }
]);
