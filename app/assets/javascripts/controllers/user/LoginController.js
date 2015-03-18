angular.module('Controllers.User').controller('LoginController', [
  '$rootScope',
  '$scope',
  '$location',
  'UserService',
  function ($rootScope, $scope, $location, UserService) {
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

          // Poll the user session
          UserService.pollUserSession();

          $location.path('/user');
        }
      });
    };
}]);
