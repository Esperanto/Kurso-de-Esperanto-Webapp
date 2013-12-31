'use strict';

/* Directives */
angular.module('directives', [])
//********************Exercises****************************///
    // Listen and click exercise
    .directive("listenClick",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/exercises/listen_click.html',
            replace: true
        }
    })
    // Listen and repeat exercise
    .directive("listenRepeat",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/exercises/listen_repeat.html',
            replace: true
        }
    })
    // listen and write exercise
    .directive("listenWrite",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/exercises/listen_write.html',
            replace: true
        }
    })
    // write number exercise
    .directive("writeNumber",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/exercises/write_number.html',
            replace: true
        }
    })

//********************Leciono1******************************//
    .directive("leciono1p1",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p1.html',
            replace: true
        }
    })
    .directive("leciono1p2",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p2.html',
            replace: true
        }
    })
    .directive("leciono1p3",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p3.html',
            replace: true
        }
    })
    .directive("leciono1p4",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p4.html',
            replace: true
        }
    })
    .directive("leciono1p5",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p5.html',
            replace: true
        }
    })
    .directive("leciono1p6",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p6.html',
            replace: true
        }
    })
    .directive("leciono1p7",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p7.html',
            replace: true
        }
    })
    .directive("leciono1p8",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p8.html',
            replace: true
        }
    })
    .directive("leciono1p9",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p9.html',
            replace: true
        }
    })
    .directive("leciono1p10",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p10.html',
            replace: true
        }
    })
    .directive("leciono1p11",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p11.html',
            replace: true
        }
    })
    .directive("leciono1p12",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono1/p12.html',
            replace: true
        }
    })

//*********************Leciono2*****************************//
    .directive("leciono2p1",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p1.html',
            replace: true
        }
    })
    .directive("leciono2p2",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p2.html',
            replace: true
        }
    })
    .directive("leciono2p3",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p3.html',
            replace: true
        }
    })
    .directive("leciono2p4",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p4.html',
            replace: true
        }
    })
    .directive("leciono2p5",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p5.html',
            replace: true
        }
    })
    .directive("leciono2p6",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p6.html',
            replace: true
        }
    })
    .directive("leciono2p7",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p7.html',
            replace: true
        }
    })
    .directive("leciono2p8",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p8.html',
            replace: true
        }
    })
    .directive("leciono2p9",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p9.html',
            replace: true
        }
    })
    .directive("leciono2p10",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p10.html',
            replace: true
        }
    })
    .directive("leciono2p11",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono2/p11.html',
            replace: true
        }
    })

//***********************Leciono3*************************//
    .directive("leciono3p1",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p1.html',
            replace: true
        }
    })
    .directive("leciono3p2",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p2.html',
            replace: true
        }
    })
    .directive("leciono3p3",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p3.html',
            replace: true
        }
    })
    .directive("leciono3p4",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p4.html',
            replace: true
        }
    })
    .directive("leciono3p5",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p5.html',
            replace: true
        }
    })
    .directive("leciono3p6",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p6.html',
            replace: true
        }
    })
    .directive("leciono3p7",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p7.html',
            replace: true
        }
    })
    .directive("leciono3p8",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p8.html',
            replace: true
        }
    })
    .directive("leciono3p9",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono3/p9.html',
            replace: true
        }
    })


//*********************Leciono4*****************************//
    .directive("leciono4p1",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p1.html',
            replace: true
        }
    })
    .directive("leciono4p2",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p2.html',
            replace: true
        }
    })
    .directive("leciono4p3",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p3.html',
            replace: true
        }
    })
    .directive("leciono4p4",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p4.html',
            replace: true
        }
    })
    .directive("leciono4p5",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p5.html',
            replace: true
        }
    })
    .directive("leciono4p6",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p6.html',
            replace: true
        }
    })
    .directive("leciono4p7",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p7.html',
            replace: true
        }
    })
    .directive("leciono4p8",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p8.html',
            replace: true
        }
    })
    .directive("leciono4p9",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p9.html',
            replace: true
        }
    })
    .directive("leciono4p10",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p10.html',
            replace: true
        }
    })
    .directive("leciono4p11",function () {
        return {
            link: function (scope, element, attrs) {
                soundManager.onready(function() {
                    inlinePlayer.init();
                });
            },
            restrict: 'AE',
            templateUrl: 'partials/lessons/leciono4/p11.html',
            replace: true
        }
    })