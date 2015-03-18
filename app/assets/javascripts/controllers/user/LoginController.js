angular.module('Controllers.User').controller('LoginController', [
  '$rootScope',
  '$scope',
  'UserService',
  function ($rootScope, $scope, UserService) {
    $scope.loginFormLoading = false;

    $scope.submitLogin = function () {
      $scope.loginFormLoading = true;

      // Login the user
      UserService.login({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function (data) {
        $scope.loginFormLoading = false;

        if (data.error) {
          $scope.error = data.error;
        } else {
          $scope.error = null;

          // User is logged in!
          $rootScope.loggedIn = true;
        }
      });
    };
}]);
