//= require angular/angular
//= require angular-rails-templates
//= require angular-route/angular-route
//= require angular-sanitize/angular-sanitize
//= require_tree ../templates
//= require configs.js
//= require_tree ./controllers
//= require_tree ./routes
//= require_tree ./directives
//= require_tree ./filters
//= require_tree ./services
angular.module('LiveHockey').run([
  '$location',
  '$rootScope',
  '$filter',
  function($location, $rootScope, $filter) {
    // Change the page title
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $rootScope.title = $filter('pagetitle')(current.$$route.title);
    });

    // Is the user logged in?
    if (LOGGED_IN) {
      $rootScope.loggedIn = true;
    }
}]);
