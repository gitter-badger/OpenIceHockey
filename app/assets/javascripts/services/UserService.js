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
      },
      login: function (data) {
        var deferred = $q.defer();

        // Send the login POST request
        $http({
          url: '/' + API_ENDPOINT + '/' + API_VERSION + '/user/login',
          method: 'POST',
          data: data
        }).then(function (data) {
          deferred.resolve(data.data);
        });

        return deferred.promise;
      },
      register: function (data) {
        var deferred = $q.defer();

        // Send the register POST request
        $http({
          url: '/' + API_ENDPOINT + '/' + API_VERSION + '/user/register',
          method: 'POST',
          data: data
        }).then(function (data) {
          deferred.resolve(data.data);
        });

        return deferred.promise;
      }
    };
}]);
