/**
 * Created by ahmed on 12/25/13.
 */

angular.module("leciono1Controller", ["i18n"])
    .controller("leciono1Controller", function ($scope,$location,i18n) {
        i18n.set('angla');

        $scope.changeLang=function(){
            i18n.set('franca');
        }

        $scope.kielFile=function(){
            return i18n.lang()['KielDosiero'];
        }

        $scope.isActive = function(route) {
            console.log($location.path(),'-------------------')
            if(route === $location.path())
                return "active";
        }

    });
