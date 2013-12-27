/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono1Controller", ["i18n", "services"])
    .controller("leciono1Controller", function ($scope, $location, $route ,$filter, i18n, locale, resources,utils,listenAndClick,listenAndWrite,listenAndRepeat) {
        i18n.set();
        $scope.listenAndClick=listenAndClick;
        listenAndClick.loadList();
        $scope.listenAndRepeat=listenAndRepeat;
        listenAndRepeat.loadList();
        $scope.listenAndWrite=listenAndWrite;
        listenAndWrite.loadList();

        $scope.changeLang = function () {
            locale.lang = "franca";
            $route.reload();
        }

        $scope.setLang = function (lang) {
            locale.lang = lang;
            $route.reload();
        }

        $scope.activeLang = function (lang) {
            if (locale.lang === lang)
                return "active";
        }


        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function (route) {
            if (route === $location.path())
                return "active";
        }



    });
