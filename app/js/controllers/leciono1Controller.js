/**
 * Created by ahmed on 12/25/13.
 */

angular.module("leciono1Controller", ["i18nFactory"])
    .controller("leciono1Controller", function ($scope,i18n) {
        console.log(i18n);
        i18n.set('test');

        $scope.changeLang=function(){
            i18n.set('test0');
        }

    });
