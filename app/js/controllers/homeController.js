/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("homeController", ["i18n","services"])
    .controller("homeController", function ($scope,$location,$route,i18n,locale) {
        i18n.set();
        $scope.getLang=function(){
            console.log("hooooooooooooooo")
          return locale.lang;
        }

    });
