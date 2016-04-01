'use strict';

/**
 * @ngdoc overview
 * @name appTaskBoardApp
 * @description
 * # appTaskBoardApp
 *
 * Main module of the application.
 */
angular
  .module('appTaskBoardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
