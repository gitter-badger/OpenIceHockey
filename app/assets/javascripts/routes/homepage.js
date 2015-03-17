angular.module('Routes.Frontend').config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      title: '',
      templateUrl: 'frontend/home.html',
      controller: 'MainController'
    });
  }
]);
