// Controlleer modules
angular.module('Controllers.Frontend', []);
angular.module('Controllers.User', []);

// Route modules
angular.module('Routes.Frontend', []);
angular.module('Routes.User', []);

// Filters
angular.module('LiveHockey.Filters', []);

// Directives
angular.module('LiveHockey.Directives', []);
angular.module('LiveHockey.Directives.User', []);

// Services
angular.module('LiveHockey.Services', []);
angular.module('LiveHockey.Services.User', []);

// Configure the application
angular.module('LiveHockey', [
  'ngRoute',
  'ngSanitize',
  'templates',
  // Routes
  'Routes.Frontend',
  'Routes.User',
  // Controllers
  'Controllers.Frontend',
  'Controllers.User',
  // Filters
  'LiveHockey.Filters',
  // Directives
  'LiveHockey.Directives',
  'LiveHockey.Directives.User',
  // Services
  'LiveHockey.Services',
  'LiveHockey.Services.User'
])
.constant('DEFAULT_PAGE_TITLE', 'Open Ice hockey')
.constant('PAGE_TITLE_DIVIDER', '&middot;')
.constant('API_ENDPOINT', 'api')
.constant('API_VERSION', 'v1');
