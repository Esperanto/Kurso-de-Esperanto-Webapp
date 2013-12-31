'use strict';


/**
 * principal module
 */

angular.module('myApp', [
        'ngRoute',
        'ngCookies',
        'filters',
        'directives',
        'services',
        'i18n',
        'homeController',
        'settingController',
        'leciono1Controller',
        'leciono2Controller',
        'leciono3Controller',
        'leciono4Controller'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/leciono1/:n', {templateUrl: 'partials/lessons/leciono1.html', controller: 'leciono1Controller'});
        $routeProvider.when('/leciono2/:n', {templateUrl: 'partials/lessons/leciono2.html', controller: 'leciono2Controller'});
        $routeProvider.when('/leciono3/:n', {templateUrl: 'partials/lessons/leciono3.html', controller: 'leciono3Controller'});
        $routeProvider.when('/leciono4/:n', {templateUrl: 'partials/lessons/leciono4.html', controller: 'leciono4Controller'});
        $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'settingController'});
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homeController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);