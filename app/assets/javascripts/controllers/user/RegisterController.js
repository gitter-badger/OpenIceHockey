angular.module('Controllers.User').controller('RegisterController', [
  '$scope',
  'UserService',
  function ($scope, $rootScope, UserService) {
    $scope.registerFormLoading = false;
    
    $scope.user = {
      type: 'admin'
    };

    $scope.submitRegister = function () {
      $scope.registerFormLoading = true;

      // Send the register request
      UserService.register({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function (data) {
        $scope.registerFormLoading = false;

        if (data.user) {
          // Successfully registered
          $rootScope.loggedIn = true;
        } else {
          // Display some server errors!
        }
      });
    };
}]);
