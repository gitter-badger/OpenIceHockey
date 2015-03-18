angular.module('LiveHockey.Services').service('TeamService', [
  '$http',
  '$q',
  'API_ENDPOINT',
  'API_VERSION',
  function ($http, $q, API_ENDPOINT, API_VERSION) {
    return {
      allTeams: function (params) {
        var deferred = $q.defer();

        // Get the data
        $http({
          url: '/' + API_ENDPOINT + '/' + API_VERSION + '/teams',
          method: 'GET',
          params: params
        }).then(function (resp) {
          deferred.resolve(resp.data.items);
        });

        // Return the promise
        return deferred.promise;
      }
    };
}]);
