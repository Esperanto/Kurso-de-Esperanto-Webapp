/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono4Controller", ["i18n","services"])
    .controller("leciono4Controller", function ($scope,$location,$route,i18n,listen_repeat,listen_write) {
        i18n.set(); // set language

        // set factories of exercises
        $scope.listen_repeat=listen_repeat;
        listen_repeat.loadList("04","0403D");
        $scope.listen_write=listen_write;
        listen_write.loadList("04","0403D");

        /**
         * memo sound to play
         */
        $scope.memo= soundManager.createSound({
            url: 'sounds/lec04/memo1.ogg'
        });

        /**
         * play the memo sound
         */
        $scope.playMemo=function(){
            $scope.memo.play();
        }

        /**
         * stop the memo sound
         */
        $scope.stopMemo=function(){
            $scope.memo.stop();
        }

        /**
         * Test if the route is active
         * @param route
         */
        $scope.isActive = function(route) {
            if(route === $location.path())
                return "active";
        }

    });
