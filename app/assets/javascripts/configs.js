// Controlleer modules
angular.module('Controllers.Frontend', []);

// Route modules
angular.module('Routes.Frontend', []);

// Filters
angular.module('LiveHockey.Filters', []);

// Configure the application
angular.module('LiveHockey', [
  'ngRoute',
  'ngSanitize',
  // Routes
  'Routes.Frontend',
  // Controllers
  'Controllers.Frontend',
  // Filters
  'LiveHockey.Filters'
])
.constant('DEFAULT_PAGE_TITLE', 'Open Ice hockey')
.constant('PAGE_TITLE_DIVIDER', '&middot;');
