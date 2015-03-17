// Controlleer modules
angular.module('Controllers.Frontend', []);
angular.module('Controllers.User', []);

// Route modules
angular.module('Routes.Frontend', []);

// Filters
angular.module('LiveHockey.Filters', []);

// Directives
angular.module('LiveHockey.Directives', []);

// Configure the application
angular.module('LiveHockey', [
  'ngRoute',
  'ngSanitize',
  'templates',
  // Routes
  'Routes.Frontend',
  // Controllers
  'Controllers.Frontend',
  'Controllers.User',
  // Filters
  'LiveHockey.Filters',
  // Directives
  'LiveHockey.Directives'
])
.constant('DEFAULT_PAGE_TITLE', 'Open Ice hockey')
.constant('PAGE_TITLE_DIVIDER', '&middot;');
