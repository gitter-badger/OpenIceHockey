angular.module('Routes.Frontend').config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      title: 'Home',
      templateUrl: '/templates/frontend/home.html'
    });
  }
]);
