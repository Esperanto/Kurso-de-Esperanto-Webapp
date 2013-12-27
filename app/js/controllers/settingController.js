/**
 * Created by ahmed on 12/27/13.
 */

/**
 * setting controller
 */
angular.module("settingController", ["i18n","services"])
    .controller("settingController", function ($scope,$location,$route,$cookies,i18n,locale) {
        i18n.set();
        $scope.setLang = function (lang) {
            locale.lang = lang;
            $cookies.locale=lang;
            $route.reload();
        }

        $scope.activeLang = function (lang) {
            if (locale.lang === lang)
                return "active";
        }
    });
