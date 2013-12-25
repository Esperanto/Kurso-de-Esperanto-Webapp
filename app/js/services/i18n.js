/**
 * Created by ahmed on 12/25/13.
 */


angular.module('i18nFactory', [])
    .factory('i18n',function($http){
        var json={};
        return {
            set:function(locale){
                $http({
                    method: "GET",
                    url:locale+".json"
                }).success(function (data) {
                        console.log(data);
                        json = eval(data);
                    })
            },
            lang:function(){
                return json
            }
        }
    });
