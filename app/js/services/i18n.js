/**
 * Created by ahmed on 12/25/13.
 */

/**
 * Module i18n
 */

angular.module('i18n', ["services"])
    .factory('i18n',function($http,locale){

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

        var json=undefined;
        return {
            set:function(){
                var chain = new Chain();
                $http({
                    method: "GET",
                    url:"lang/"+locale.lang+".json"
                }).success(function (data) {
                        json = eval(data);
                        if (typeof chain.success === "function")
                            chain.success.apply(this, arguments);
                    }).error(function(){
                        if (typeof chain.error === "function")
                            chain.error.apply(this, arguments);
                    })
                return chain.r;
            },
            lang:function(){
                return json
            }
        }
    });
