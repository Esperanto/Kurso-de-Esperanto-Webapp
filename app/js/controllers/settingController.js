/**
 * Created by ahmed on 12/27/13.
 */

/**
 * setting controller
 */
angular.module("settingController", ["i18n","services"])
    .controller("settingController", function ($scope,$location,$route,$cookies,i18n,locale) {
        i18n.set(); // set language

        // change a language
        $scope.setLang = function (lang) {
            locale.lang = lang;
            $cookies.locale=lang;
            $route.reload();
        }

        /**
         * Test if the route is active
         * @param route
         */
        $scope.activeLang = function (lang) {
            if (locale.lang === lang)
                return "active";
        }
    });
