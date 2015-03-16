//= require angular/angular
//= require angular-route/angular-route
//= require angular-sanitize/angular-sanitize
//= require configs.js
//= require_tree ./routes
//= require_tree ./filters
angular.module('LiveHockey').run([
  '$location',
  '$rootScope',
  '$filter',
  function($location, $rootScope, $filter) {
    // Change the page title
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $rootScope.title = $filter('pagetitle')(current.$$route.title);
    });
}]);
