'use strict';

/* Filters */
angular.module('filters', ['i18n']).
/**
 * Filter to translate
 */
    filter('translate', function (i18n){
        return function(input){
            var lang=i18n.lang();
            if(angular.isDefined(lang)){
                var pointIndex=input.indexOf('.');

                var part1=input.substring(0,pointIndex);
                var part2=input.substring(pointIndex+1,lang.length);

                var result=lang[part1];
                    if(angular.isDefined(result));
                        result=result[part2];
                return result;
            }
        }
    });