'use strict';

/* services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('services', []).factory('locale',function () {
    return {
        lang: "angla"
    }
}).factory('resources', function ($http) {

        function Chain() {
            var _this = this;
            this.success = undefined;
            this.error = undefined;
            this.r = { success: function (callback) {
                _this.success = callback;
                return _this.r;
            },
                error: function (callback) {
                    _this.error = callback;
                    return _this.r;
                }}

        }

        return {
            load: function (fileName) {
                var chain = new Chain();
                $http({
                    method: "GET",
                    url: "resources/ekzercoj/" + fileName + ".json"
                }).success(function (data) {
                        if (typeof chain.success === "function")
                            chain.success.apply(this, arguments);
                    }).error(function () {
                        if (typeof chain.error === "function")
                            chain.error.apply(this, arguments);
                    })
                return chain.r;
            }
        }
    }).factory('utils', function ($http) {
        return {
            replaceSpecialChars:function(value){
                value=value.replace("ĉ","cx");
                value=value.replace("ĝ","gx");
                value=value.replace("ĥ","hx");
                value=value.replace("ĵ","jx");
                value=value.replace("ŝ","sx");
                value=value.replace("ŭ","ux");
                console.log(value);
                return value;
            }
        }
    }).factory('listenAndClick',function (resources,utils,$timeout,$filter) {
        /**
         * code that manage the game of  Leciono1 part 2
         */
        var obj = {
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
                        obj.entireList.push(value);
                    });
                    obj.remainList = angular.copy(obj.entireList);
                    obj.generateRandomList();
                })
            },
            generateRandomList: function () {
                obj.randomList = [
                    [],
                    [],
                    []
                ];
                obj.unclickedList = [];
                if(obj.remainList.length<6){
                    obj.on=false;
                    obj.remainList = angular.copy(obj.entireList);
                    $('#result').modal()
                }
                for (var i = 0; i < 6; i++) {
                    var index = Math.floor((Math.random() * (obj.remainList.length)));
                    obj.randomList[Math.floor(i / 2)].push(obj.remainList[index]);
                    obj.unclickedList.push(obj.remainList[index]);
                    obj.remainList.splice(index, 1);
                }

            },
            clickBtn: function (value) {
                if(obj.playedWord==value){
                    var index = obj.unclickedList.indexOf(value);
                    obj.unclickedList.splice(index, 1);
                    if (obj.unclickedList.length == 2) {
                        obj.remainList = obj.remainList.concat(obj.unclickedList);
                        obj.generateRandomList();
                    }
                    if(obj.on)
                        obj.playSound();
                }else{
                    obj.wrongClicks++;
                    var activeBtnFn=obj.activeBtn;
                    obj.activeBtn=function (val) {
                        if(val!=obj.playedWord)
                            return "disabled";
                        return "btn-danger";
                    }
                    obj.playWrongSound();
                    setTimeout(function(){
                        obj.activeBtn=activeBtnFn;
                        $scope.$apply();
                        obj.playSound();
                    },1500)
                }
                console.log(value, obj.unclickedList)
            },
            activeBtn: function (value) {
                if (obj.unclickedList.indexOf(value) == -1)
                    return "disabled";
                return "btn-primary";
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.playSound();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks=0;
                obj.remainList = angular.copy(obj.entireList);
                obj.generateRandomList();
            },
            // play a random sound from the unclicked buttons displayed
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.unclickedList.length));
                var soundToPlay = obj.unclickedList[index];
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec01/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play();
                obj.playedSound=sound;
            },
            // replay the last sound played
            replaySound:function(){
                obj.playedSound.play();
            },
            playWrongSound:function(){
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            rightClicks:function(){
                return obj.entireList.length-(obj.remainList.length+obj.unclickedList.length);
            },
            wrongClicks:0,
            message:function(){
                var win = obj.wrongClicks/obj.entireList.length < 0.3;
                return (win?$filter('translate')('Mesagxoj.smGratulon'):$filter('translate')('Mesagxoj.smDenove'))
            }

        }

        return obj;
    })

    .factory('listenAndWrite',function(resources,utils,$timeout){
        var obj = {
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
            wrong:false,
            textArea:"",
            input:"",
            // load the entire list from the resources
            loadList: function () {
                resources.load("ekz01").success(function (data) {
                    angular.forEach(eval(data)['0101D'], function (value) {
                        obj.entireList.push(value);
                    });
                    obj.remainList = angular.copy(obj.entireList);

                })
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.playSound();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks=0;
                obj.remainList = angular.copy(obj.entireList);
            },
            // play a random sound
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.remainList.length));
                var soundToPlay = obj.remainList[index];
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec01/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play();
                obj.playedSound=sound;
            },
            // replay the last sound played
            replaySound:function(){
                if(obj.on){
                    obj.playedSound.play();
                }
            },
            playWrongSound:function(){
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            submit:function(value){
                if(obj.on){
                    var wordToWrite=utils.replaceSpecialChars(obj.playedWord);
                    if(wordToWrite==value){
                        obj.textArea+=value+"\n";
                        obj.input="";
                        var index=obj.remainList.indexOf(obj.playedWord);
                        obj.remainList.splice(index,1);
                    }
                    else{
                        if(value!=""){
                            obj.wrongClicks++;
                            obj.playWrongSound();
                            obj.wrong=true;
                            $timeout(function(){
                              obj.wrong=false;
                            },1500);
                        }
                    }
                    setTimeout(function(){
                        obj.playSound();
                    },1000)
                    console.log(value);
                }
            },
            rightClicks:function(){
                return obj.entireList.length-(obj.remainList.length);
            },
            wrongClicks:0,
            message:function(){
                var win = obj.wrongClicks/obj.entireList.length < 0.3;
                return (win?$filter('translate')('Mesagxoj.smGratulon'):$filter('translate')('Mesagxoj.smDenove'))
            }

        }

        return obj;
    }).factory('listenAndRepeat',function (resources,utils,$timeout) {
        var obj={
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
            isPlaying:false,
            progress:0,
            count:2,
            countToPlay:2,
            // load the entire list from the resources
            loadList: function () {
                resources.load("ekz01").success(function (data) {
                    angular.forEach(eval(data)['0101D'], function (value) {
                        obj.entireList.push(value);
                    });
                    obj.remainList = angular.copy(obj.entireList);

                })
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.nextSounds();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks=0;
                obj.remainList = angular.copy(obj.entireList);
            },
            // play a random sound
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.remainList.length));
                var soundToPlay = obj.remainList[index];
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec01/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play();
                obj.playing();
                obj.playedSound=sound;
            }, replaySound:function(){
                if(obj.on){
                    obj.playedSound.play();
                    obj.playing();
                }
            },
            playing:function(){
                obj.isPlaying=true;
                obj.progress=0;
                $timeout(function(){
                    obj.isPlaying=false;
                    for(var i=0;i<4;i++){
                        (function(i){
                            $timeout(function(){
                                console.log(i);
                                obj.progress=i*100/3;
                            },(i+1)*500);
                        })(i);
                    }
                    obj.countToPlay--;
                },2000);
            },
            nextSounds:function(){
                obj.countToPlay=obj.count;
                obj.playSound();
                for(var i=0;i<obj.count-1;i++){
                    $timeout(function(){
                        obj.playSound();
                    },(i+1)*4000);
                }
            }
        };
        return obj;
    });;
