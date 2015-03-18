angular.module('LiveHockey.Directives.User').directive('emailUnique', [
  '$timeout',
  'UserService',
  function ($timeout, UserService) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function ($scope, element, attrs, ngModel) {
        var searchTimeout;
        $scope.$watch(function () {
          return ngModel.$modelValue;
        }, function (value) {
          if (ngModel.$dirty && value !== '') {
            $timeout.cancel(searchTimeout);

            // Wait for a timer to finish
            // Save sending lots of requests!
            ngModel.$setValidity('unique', false);
            searchTimeout = $timeout(function () {
              UserService.searchForEmail(value).then(function (data) {
                if (data.users > 0) {
                  ngModel.$setValidity('unique', false);
                } else {
                  ngModel.$setValidity('unique', true);
                }
              });
            }, 200);
          }
        });
      }
    }
}]);
