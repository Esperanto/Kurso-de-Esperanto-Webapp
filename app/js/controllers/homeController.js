/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the home page
 */
angular.module("homeController", ["i18n","services"])
    .controller("homeController", function ($scope,$location,$route,i18n,locale) {
        i18n.set();

        /**
         * get the language strings
         */
        $scope.getLang=function(){
          return locale.lang;
        }
    });
