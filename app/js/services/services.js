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
    });
