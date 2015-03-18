angular.module('Controllers.User').controller('RegisterController', [
  '$scope',
  'UserService',
  function ($scope, UserService) {
    $scope.registerFormLoading = false;

    $scope.submitRegister = function () {
      // Send the register request
      UserService.register({
        email: $scope.user.email,
        password: $scope.user.password
      }).then(function (data) {
        if (data.user) {
          // Successfully registered
        } else {
          // Display some server errors!
        }
      });
    };
}]);
