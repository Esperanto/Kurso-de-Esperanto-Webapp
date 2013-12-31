/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 2
 */
angular.module("leciono3Controller", ["i18n","services"])
    .controller("leciono3Controller", function ($scope,$location,$route,i18n,listen_repeat,listen_write,write_number) {
        i18n.set(); // set language

        // set factories of exercises
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("03","0302D");
        $scope.listen_write=listen_write;
        listen_write.loadList("03","0302D");
        $scope.write_number=write_number;
        write_number.loadList("03","0301D","0301R");

        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function(route) {
            if(route === $location.path())
                return "active";
        }
    });
