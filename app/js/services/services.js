'use strict';

/* services */

angular.module('services', [])
/**
 * Locale
 */
    .factory('locale', function () {
        return {
            lang: "angla"
        }
    })

/**
 * Factory to load resources
 */
    .factory('resources',function ($http) {

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
    })
/**
 * Utils Factory
 */
    .factory('utils',function ($http) {
        return {
            replaceSpecialChars: function (value) {
                value = value.replace("ĉ", "cx");
                value = value.replace("ĝ", "gx");
                value = value.replace("ĥ", "hx");
                value = value.replace("ĵ", "jx");
                value = value.replace("ŝ", "sx");
                value = value.replace("ŭ", "ux");
                console.log(value);
                return value;
            }
        }
    })
/**
 * Listen and click exercise
 */
    .factory('listen_click', function (resources, utils, $timeout, $filter) {
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
            playedWord: "",
            // is the game On or Off
            on: false,
            //leciono from where to load the resource
            leciono: "00",
            // load the entire list from the resources
            loadList: function (leciono, part) {
                if (leciono != obj.leciono) {
                    obj.on = false;
                    obj.entireList = [];
                    obj.leciono = leciono;
                    resources.load("ekz" + leciono).success(function (data) {
                        angular.forEach(eval(data)[part], function (value) {
                            obj.entireList.push(value);
                        });
                        // fill remainList with the entire list
                        obj.remainList = angular.copy(obj.entireList);
                        obj.generateRandomList();
                    });
                }
            },
            /**
             * Generate a random list from the remainList
             */
            generateRandomList: function () {
                obj.randomList = [
                    [],
                    [],
                    []
                ];
                obj.unclickedList = [];
                // end of the game if remainList.length < 6
                if (obj.remainList.length < 6) {
                    obj.on = false;
                    obj.remainList = angular.copy(obj.entireList);
                    $('#result').modal() // show modal
                }
                //Fill the randomList with 6 elements picked from the remainList randomly
                for (var i = 0; i < 6; i++) {
                    var index = Math.floor((Math.random() * (obj.remainList.length)));
                    obj.randomList[Math.floor(i / 2)].push(obj.remainList[index]);
                    obj.unclickedList.push(obj.remainList[index]);
                    obj.remainList.splice(index, 1);
                }

            },
            /**
             * click on one of the 6 random words displayed
             * @param value
             */
            clickBtn: function (value) {
                // success
                if (obj.playedWord == value) {
                    var index = obj.unclickedList.indexOf(value);
                    obj.unclickedList.splice(index, 1);
                    //when their is only 2 unclicked words displayed
                    if (obj.unclickedList.length == 2) {
                        obj.remainList = obj.remainList.concat(obj.unclickedList);
                        obj.generateRandomList(); // generate a new random list
                    }
                    if (obj.on)
                        obj.playSound();
                }
                // fail
                else {
                    obj.wrongClicks++;
                    var activeBtnFn = obj.activeBtn;
                    obj.activeBtn = function (val) {
                        if (val != obj.playedWord)
                            return "disabled";
                        return "btn-danger";
                    }
                    obj.playWrongSound();
                    $timeout(function () {
                        obj.activeBtn = activeBtnFn;
                        obj.playSound();
                    }, 1500)
                }
                console.log(value, obj.unclickedList)
            },
            // return css class for the 6 words displayed
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
                obj.wrongClicks = 0;
                obj.remainList = angular.copy(obj.entireList); // copy
                obj.generateRandomList();
            },
            // play a random sound from the unclicked buttons displayed
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.unclickedList.length));
                var soundToPlay = obj.unclickedList[index];
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec' + obj.leciono + '/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play(); // play
                obj.playedSound = sound;
            },
            // replay the last sound played
            replaySound: function () {
                obj.playedSound.play();
            },
            // sound played in case of a mistake
            playWrongSound: function () {
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            // number of right clicks
            rightClicks: function () {
                return obj.entireList.length - (obj.remainList.length + obj.unclickedList.length);
            },
            wrongClicks: 0, // number of wrong clicks
            //Message to display at the end of the game
            message: function () {
                var win = obj.wrongClicks / obj.entireList.length < 0.3;
                return (win ? $filter('translate')('Mesagxoj.smGratulon') : $filter('translate')('Mesagxoj.smDenove'))
            }
        }
        return obj;
    })
// listen and write exercise
    .factory('listen_write', function (resources, utils, $timeout) {
        var obj = {
            // the entire list of items loaded from the resources
            entireList: [],
            // the list that contains the remain items to display
            remainList: [],
            // object of the sound played
            playedSound: undefined,
            // string that contains the word played
            playedWord: "",
            // is the game On or Off
            on: false,
            // set to true when their is a wrong answer
            wrong: false,
            //value of the textArea in the exercise
            textArea: "",
            // value of the input
            input: "",
            //leciono from where to load the resource
            leciono: "00",
            // load the entire list from the resources
            loadList: function (leciono, part) {
                if (leciono != obj.leciono) {
                    obj.on = false;
                    obj.entireList = [];
                    obj.leciono = leciono;
                    resources.load("ekz" + obj.leciono).success(function (data) {
                        angular.forEach(eval(data)[part], function (value) {
                            obj.entireList.push(value);
                        });
                        obj.remainList = angular.copy(obj.entireList);
                    });
                }
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.playSound();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks = 0;
                obj.remainList = angular.copy(obj.entireList);
            },
            // play a random sound
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.remainList.length));
                var soundToPlay = obj.remainList[index];
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec' + obj.leciono + '/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play(); // play
                obj.playedSound = sound;
            },
            // replay the last sound played
            replaySound: function () {
                if (obj.on) {
                    obj.playedSound.play();
                }
            },
            // sound played in case of a mistake
            playWrongSound: function () {
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            // click of the submit button
            submit: function (value) {
                if (obj.on && value != "") {
                    var wordToWrite = utils.replaceSpecialChars(obj.playedWord);
                    if (wordToWrite == value) {
                        obj.textArea += value + "\n"; // add the value to the text area
                        obj.input = ""; // empty input
                        var index = obj.remainList.indexOf(obj.playedWord);
                        obj.remainList.splice(index, 1); // remove the word from the remainList
                    }
                    else {
                        obj.wrongClicks++;
                        obj.playWrongSound();
                        obj.wrong = true;
                        // set to right mode after 1.5 seconds
                        $timeout(function () {
                            obj.wrong = false;
                            obj.input = "";
                        }, 1500);
                    }
                    // play new sound after 1 second
                    $timeout(function () {
                        obj.playSound();
                    }, 1000)
                    console.log(value);
                }
            },
            // number of right clicks
            rightClicks: function () {
                return obj.entireList.length - (obj.remainList.length);
            },
            wrongClicks: 0, // number of wrong clicks
            //Message to display at the end of the game
            message: function () {
                var win = obj.wrongClicks / obj.entireList.length < 0.3;
                return (win ? $filter('translate')('Mesagxoj.smGratulon') : $filter('translate')('Mesagxoj.smDenove'))
            }
        }
        return obj;
    })
// Listen and repeat exercise
    .factory('listen_repeat', function (resources, utils, $timeout) {
        var obj = {
            // the entire list of items loaded from the resources
            entireList: [],
            // the list that contains the remain items to display
            remainList: [],
            // object of the sound played
            playedSound: undefined,
            // string that contains the word played
            playedWord: "",
            // is the game On or Off
            on: false,
            // is the sound playing
            isPlaying: false,
            // the value of the progress bar
            progress: 0,
            // number sounds chosen to play
            count: 2,
            // number of sounds left to play
            countToPlay: 2,
            // time let to repeat the word
            time: 2,
            //leciono from where to load the resource
            leciono: "00",
            // load the entire list from the resources
            loadList: function (leciono, part) {
                if (leciono != obj.leciono) {
                    obj.on = false;
                    obj.entireList = [];
                    obj.leciono = leciono;
                    resources.load("ekz" + leciono).success(function (data) {
                        angular.forEach(eval(data)[part], function (value) {
                            obj.entireList.push(value);
                        });
                        obj.remainList = angular.copy(obj.entireList);
                    });
                }
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.nextSounds();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks = 0;
                obj.remainList = angular.copy(obj.entireList);
            },
            // play a random sound
            playSound: function () {
                console.log("Play Sound!")
                var index = Math.floor((Math.random() * obj.remainList.length));
                var soundToPlay = obj.remainList[index];
                obj.remainList.splice(index, 1);
                obj.playedWord = soundToPlay;
                var sound = soundManager.createSound({
                    url: 'sounds/lec' + obj.leciono + '/' + utils.replaceSpecialChars(soundToPlay) + '.ogg'
                });
                sound.play();
                obj.playing();
                obj.playedSound = sound;
            },
            // replay the sound
            replaySound: function () {
                if (obj.on) {
                    obj.playedSound.play();
                    obj.playing();
                }
            },
            // playing sounds
            playing: function () {
                obj.isPlaying = true;
                obj.progress = 0;
                $timeout(function () {
                    obj.isPlaying = false;
                    for (var i = 1; i <= 2 * obj.time; i++) {
                        (function (i) {
                            $timeout(function () {
                                obj.progress = i * 100 / (2 * obj.time);
                                if (i == 2 * obj.time && obj.countToPlay > 0)
                                    obj.countToPlay--;
                            }, i * 500);
                        })(i);
                    }
                }, 2000);
            },
            // play next sounds
            nextSounds: function () {
                obj.countToPlay = obj.count;
                obj.playSound();
                for (var i = 0; i < obj.count - 1; i++) {
                    $timeout(function () {
                        obj.playSound();
                    }, (i + 1) * obj.time * 2000);
                }
            }
        };
        return obj;
    })
// write number exercise
    .factory('write_number', function (resources, utils, $timeout) {
        var obj = {
            // the entire list of items loaded from the resources
            entireList: [],
            // the entire list of items of numbers loaded from the resources
            entireNumberList: [],
            // the list that contains the remain items to display
            remainList: [],
            //the number in words
            sNumber: "",
            // the number
            number:0,
            // is the game On or Off
            on: false,
            // wrong clicks
            wrongClicks: 0,
            //leciono from where to load the resource
            leciono: "00",
            // load the entire list from the resources
            loadList: function (leciono, part1, part2) {
                if (leciono != obj.leciono) {
                    obj.on = false;
                    obj.entireList = [];
                    obj.entireNumberList = [];
                    obj.leciono = leciono;
                    resources.load("ekz" + leciono).success(function (data) {
                        angular.forEach(eval(data)[part1], function (value) {
                            obj.entireList.push(value);
                        });
                        obj.remainList = angular.copy(obj.entireList);
                    });
                    resources.load("ekz" + leciono).success(function (data) {
                        angular.forEach(eval(data)[part2], function (value) {
                            obj.entireNumberList.push(value);
                        });
                    });
                }
            },
            // turn On the game
            turnOn: function () {
                obj.on = true;
                obj.displayNumber();
            },
            // turn Off the game
            turnOff: function () {
                obj.on = false;
                obj.wrongClicks = 0;
                obj.remainList = angular.copy(obj.entireList);
            },
            // play a random sound
            displayNumber: function () {
                var index = Math.floor((Math.random() * obj.remainList.length));
                obj.sNumber = obj.remainList[index];
            },
            // click on the submit button
            submit: function (value) {
                if (obj.on && value != "") {
                    var index = obj.entireList.indexOf(obj.sNumber);
                    obj.number = obj.entireNumberList[index];
                    console.log(obj.number, value)
                    if (obj.number == value) {
                        obj.input = "";
                        var index = obj.remainList.indexOf(obj.sNumber);
                        obj.remainList.splice(index, 1);
                        obj.playCorrectSound();
                    }
                    else {
                        obj.wrongClicks++;
                        obj.playWrongSound();
                        obj.wrong = true;
                        $timeout(function () {
                            obj.wrong = false;
                            obj.input = "";
                        }, 1500);
                    }
                    $timeout(function () {
                        obj.displayNumber();
                    }, 1000)
                }
            },
            // sound played in case of a mistake
            playWrongSound: function () {
                var sound = soundManager.createSound({
                    url: 'sounds/ne3.ogg'
                });
                sound.play();
            },
            // sound played in case of a good answer
            playCorrectSound: function () {
                var sound = soundManager.createSound({
                    url: 'sounds/korekte3.ogg'
                });
                sound.play();
            },
            // number of right clicks
            rightClicks: function () {
                return obj.entireList.length - (obj.remainList.length);
            }
        };
        return obj;
    });

