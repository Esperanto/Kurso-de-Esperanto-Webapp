/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono1Controller", ["i18n", "services"])
    .controller("leciono1Controller", function ($scope, $location, $route ,$filter, i18n, locale, resources,utils,listen_click,listen_write,listen_repeat) {
        i18n.set(); // set language

        // set factories of exercises
        $scope.listen_click=listen_click;
        listen_click.loadList("01","0101D");
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("01","0101D");
        $scope.listen_write=listen_write;
        listen_write.loadList("01","0101D");


        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function (route) {
            if (route === $location.path())
                return "active";
        }
    });
