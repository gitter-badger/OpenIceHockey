angular.module('Controllers.User').controller('HomeTeamController', [
  '$scope',
  '$rootScope',
  'UserService',
  function ($scope, $rootScope, UserService) {
    function getTeams() {
      // Get all the teams for this user
      UserService.getAllTeamsForCurrentUser().then(function (teams) {
        $rootScope.allTeams = teams;
      });
    }

    getTeams();
}]);
