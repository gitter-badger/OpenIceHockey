angular.module('LiveHockey.Directives').directive('ajaxButton', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: 'directives/ajaxButtonTemplate.html',
    scope: {
      disabled: '=',
      type: '=btnType',
      loading: '=',
      click: '='
    },
    link: function ($scope) {
      var oldDisabled = $scope.disabled;

      $scope.$watch('loading', function (newValue) {
        if (newValue) {
          oldDisabled = $scope.disabled;
          $scope.buttonDisabled = true;
        } else {
          $scope.buttonDisabled = oldDisabled;
        }
      });
    }
  };
});
