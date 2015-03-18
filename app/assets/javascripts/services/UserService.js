angular.module('LiveHockey.Services.User').service('UserService', [
  '$http',
  '$q',
  'API_ENDPOINT',
  'API_VERSION',
  function ($http, $q, API_ENDPOINT, API_VERSION) {
    return {
      searchForEmail: function (email) {
        var deferred = $q.defer();

        // Send a POST request
        $http({
          url: '/' + API_ENDPOINT + '/' + API_VERSION + '/users/email',
          method: 'POST',
          params: {
            email: email
          }
        }).then(function (data) {
          deferred.resolve(data.data);
        });

        return deferred.promise;
      }
    };
}]);
