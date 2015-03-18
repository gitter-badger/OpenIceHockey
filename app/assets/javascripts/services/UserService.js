angular.module('LiveHockey.Services.User').service('UserService', [
  '$http',
  '$q',
  '$timeout',
  '$rootScope',
  '$location',
  'API_ENDPOINT',
  'API_VERSION',
  function ($http, $q, $timeout, $rootScope, $location, API_ENDPOINT, API_VERSION) {
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
        }).then(function (resp) {
          deferred.resolve(resp.data);
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
        }).then(function (resp) {
          deferred.resolve(resp.data);
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
        }).then(function (resp) {
          deferred.resolve(resp.data);
        });

        return deferred.promise;
      },
      pollUserSession: function () {
        var self = this;

        $timeout(function () {
          $http({
            url: '/' + API_ENDPOINT + '/' + API_VERSION + '/user/check-session',
            method: 'GET'
          }).then(function (resp) {
            var d = resp.data;

            if (d.error) {
              // Not logged in
              // Redirect to homepage
              $rootScope.loggedIn = false;

              // Redirect to homepage
              $location.path('/');
            } else {
              // Logged in
              $rootScope.loggedIn = true;

              // Run another poll
              self.pollUserSession();
            }
          });
        }, 10 * 1000);
      },
      getAllTeamsForCurrentUser: function () {
        var deferred = $q.defer();

        // Send request
        $http({
          url: '/' + API_ENDPOINT + '/' + API_VERSION + '/user/teams',
          method: 'GET'
        }).then(function (resp) {
          if (resp.data.items) {
            deferred.resolve(resp.data.items);
          } else {
            // Error message
          }
        });

        return deferred.promise;
      }
    };
}]);
