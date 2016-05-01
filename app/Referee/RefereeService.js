var services = angular.module('myApp.refereeSuggServices', []);

services.factory('RefereeSuggFactory', ['$http', function ($http){

    var dataFactory = {};

    dataFactory.suggs = function (){
        return $http.get('http://localhost:3000/suggestion');
    };

    dataFactory.suggsA = function (){
        return $http.get('http://localhost:3000/suggestion/sugg_accepted');
    };

    dataFactory.suggsR = function (){
        return $http.get('http://localhost:3000/suggestion/sugg_refused');
    };

    dataFactory.instaLiked = function (){
        return $http.get('http://localhost:3000/users/user_self');
    };

//    dataFactory.delSugg = function (idEvent){
//        return $http.delete('http://localhost:3000/events/'+idEvent);
//    };
//
//    dataFactory.addSugg = function (event) {
//        return $http.post('http://localhost:3000/events/newEvent', event);
//    };
    // ajouter PUT des suggestions

    return dataFactory;

}]);
