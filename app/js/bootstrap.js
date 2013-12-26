/**
 * Created by ahmed on 12/26/13.
 */
function bootstrap(){

    var $injector = angular.injector(['i18n']);
    var i18n = $injector.get('i18n');

    i18n.set("angla").success(function(){
        var elem=angular.element("html");
        angular.bootstrap(elem, ["myApp"]);
    });
}