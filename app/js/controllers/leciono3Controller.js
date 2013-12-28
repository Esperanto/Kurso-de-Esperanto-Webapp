/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono3Controller", ["i18n","services"])
    .controller("leciono3Controller", function ($scope,$location,$route,i18n,listen_repeat,listen_write) {
        i18n.set();
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("03","0302D");
        $scope.listen_write=listen_write;
        listen_write.loadList("03","0302D");
        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function(route) {
            if(route === $location.path())
                return "active";
        }

    });
