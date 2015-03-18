angular.module('LiveHockey.Directives.User').directive('inputMatch', function () {
  return {
    require: 'ngModel',
    restrict: 'A',
    scope: {
      inputMatch: '='
    },
    link: function (scope, element, attrs, ngModel) {
      return scope.$watch(function () {
        return ngModel.$modelValue;
      }, function (value) {
        if (ngModel.$dirty && value !== scope.inputMatch) {
          ngModel.$setValidity('match', false);
        } else if (ngModel.$dirty) {
          ngModel.$setValidity('match', true);
        }
      });
    }
  };
});
