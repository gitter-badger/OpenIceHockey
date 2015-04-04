angular.module('Controllers.Frontend').controller('MainController', [
  '$scope',
  'TeamService',
  function ($scope, TeamService) {
    // Get the last 5 registered teams
    TeamService.allTeams({
      order: 'id|DESC',
      limit: 5
    }).then(function (data) {
      $scope.latestTeams = data;
    });
    
    // Login/Register tabs
    $scope.tab = 'login';
    $scope.changeTab = function (type) {
      $scope.tab = type;
      return false;
    };
}]);
