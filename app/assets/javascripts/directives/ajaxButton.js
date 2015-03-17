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
    }
  };
});
