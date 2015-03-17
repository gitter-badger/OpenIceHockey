angular.module('LiveHockey.Filters').filter('pagetitle', [
  'DEFAULT_PAGE_TITLE',
  'PAGE_TITLE_DIVIDER',
  function (DEFAULT_PAGE_TITLE, PAGE_TITLE_DIVIDER) {
  return function (title) {
    return (title !== undefined && title !== '') ? (title + ' ' + PAGE_TITLE_DIVIDER + ' ' + DEFAULT_PAGE_TITLE) : DEFAULT_PAGE_TITLE;
  }
}]);
