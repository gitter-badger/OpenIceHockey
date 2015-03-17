angular.module('Controllers.User').controller('LoginController', [
  '$scope',
  function ($scope) {
    $scope.loginFormLoading = false;

    $scope.submitLogin = function () {
      $scope.loginFormLoading = true;
    };
}]);
