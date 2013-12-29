/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono4Controller", ["i18n","services"])
    .controller("leciono4Controller", function ($scope,$location,$route,i18n,listen_repeat,listen_write) {
        i18n.set();
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("04","0403D");
        $scope.listen_write=listen_write;
        listen_write.loadList("04","0403D");
        /**
         * Test if the route is active
         * @param route
         */

        $scope.memo= soundManager.createSound({
            url: 'sounds/lec04/memo1.ogg'
        });

        $scope.playMemo=function(){
            $scope.memo.play();
        }

        $scope.stopMemo=function(){
            $scope.memo.stop();
        }

        $scope.isActive = function(route) {
            if(route === $location.path())
                return "active";
        }

    });
