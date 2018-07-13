(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    // Categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller: 'MainListController as mainList',
      resolve: {
        promise: ['MenuDataService', function (MenuDataService) {
          var promise = MenuDataService.getAllCategories();
          return promise;
        }]
      }
    })

    // Items
    .state('items', {
      url: '/items/{short_name}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemsController as itemDetail',
      resolve: {
        promise: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          var promise = MenuDataService.getItemsForCategory($stateParams.short_name);
          return promise;
        }]
      }
    });
  }

})();
