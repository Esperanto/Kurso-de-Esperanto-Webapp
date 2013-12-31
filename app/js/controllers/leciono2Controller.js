/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 2
 */
angular.module("leciono2Controller", ["i18n","services"])
    .controller("leciono2Controller", function ($scope,$location,$route,i18n,listen_repeat,listen_write) {
        i18n.set(); // set language

        // set factories of exercises
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("02","0201D");
        $scope.listen_write=listen_write;
        listen_write.loadList("02","0201D");

        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function(route) {
            if(route === $location.path())
                return "active";
        }
    });
