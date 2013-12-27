/**
 * Created by ahmed on 12/25/13.
 */
/**
 * controller of the lesson 1
 */
angular.module("leciono1Controller", ["i18n", "services"])
    .controller("leciono1Controller", function ($scope, $location, $route ,$filter, i18n, locale, resources,utils) {
        i18n.set();


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
        /**
         * code that manage the game of  Leciono1 part 2
         */
        $scope.p2 = {
            // the random list to display to the user
            randomList: [
                [],
                [],
                []
            ],
            // the unclicked items from the random list
            unclickedList: [],
            // the entire list of items loaded from the resources
            entireList: [],
            // the list that contains the remain items to display
            remainList: [],
            // object of the sound played
            playedSound: undefined,
            // string that contains the word played
            playedWord:"",
            // is the game On or Off
            on: false,

            // load the entire list from the resources
            loadList: function () {
                resources.load("ekz01").success(function (data) {
                    angular.forEach(eval(data)['0101D'], function (value) {
                        $scope.p2.entireList.push(value);
                    });
                    $scope.p2.remainList = angular.copy($scope.p2.entireList);
                    $scope.p2.generateRandomList();
                })
            },
            generateRandomList: function () {
                $scope.p2.randomList = [
                    [],
                    [],
                    []
                ];
                $scope.p2.unclickedList = [];
                if($scope.p2.remainList.length<6){
                    $scope.p2.on=false;
                    $scope.p2.remainList = angular.copy($scope.p2.entireList);
                    $('#result').modal()
                }
                    for (var i = 0; i < 6; i++) {
                        var index = Math.floor((Math.random() * ($scope.p2.remainList.length)));
                        $scope.p2.randomList[Math.floor(i / 2)].push($scope.p2.remainList[index]);
                        $scope.p2.unclickedList.push($scope.p2.remainList[index]);
                        $scope.p2.remainList.splice(index, 1);
                    }

            },
            clickBtn: function (value) {
                    if($scope.p2.playedWord==value){
                        var index = $scope.p2.unclickedList.indexOf(value);
                        $scope.p2.unclickedList.splice(index, 1);
                        if ($scope.p2.unclickedList.length == 2) {
                            $scope.p2.remainList = $scope.p2.remainList.concat($scope.p2.unclickedList);
                            $scope.p2.generateRandomList();
                        }
                        if($scope.p2.on)
                            $scope.p2.playSound();
                    }else{
                        $scope.p2.wrongClicks++;
                        var activeBtnFn=$scope.p2.activeBtn;
                        $scope.p2.activeBtn=function (val) {
                           if(val!=$scope.p2.playedWord)
                                return "disabled";
                            return "btn-danger";
                        }
                        $scope.p2.playWrongSound();
                        setTimeout(function(){
                            $scope.p2.activeBtn=activeBtnFn;
                            $scope.$apply();
                            $scope.p2.playSound();
                        },1500)
                     }
                console.log(value, $scope.p2.unclickedList)
            },
            activeBtn: function (value) {
                    if ($scope.p2.unclickedList.indexOf(value) == -1)
                        return "disabled";
                    return "btn-primary";
            },
            // turn On the game
            turnOn: function () {
                $scope.p2.on = true;
                $scope.p2.playSound();
            },
            // turn Off the game
            turnOff: function () {
                $scope.p2.on = false;
                $scope.p2.wrongClicks=0;
                $scope.p2.remainList = angular.copy($scope.p2.entireList);
                $scope.p2.generateRandomList();
            },
            // play a random sound from the unclicked buttons displayed
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * $scope.p2.unclickedList.length));
                var soundToPlay = $scope.p2.unclickedList[index];
                $scope.p2.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec01/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play();
                $scope.p2.playedSound=sound;
            },
            // replay the last sound played
            replaySound:function(){
                $scope.p2.playedSound.play();
            },
            playWrongSound:function(){
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            rightClicks:function(){
                return $scope.p2.entireList.length-($scope.p2.remainList.length+$scope.p2.unclickedList.length);
            },
            wrongClicks:0,
            message:function(){
                var win = $scope.p2.wrongClicks/$scope.p2.entireList.length < 0.3;
                return (win?$filter('translate')('Mesagxoj.smGratulon'):$filter('translate')('Mesagxoj.smDenove'))
            }

        }

        $scope.p2.loadList();

    });
