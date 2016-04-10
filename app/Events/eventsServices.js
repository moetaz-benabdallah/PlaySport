var services = angular.module('myApp.eventsServices', []);

services.factory('EventsFactory', ['$http', function ($http){

    var dataFactory = {};

    dataFactory.events = function (){
        return $http.get('http://localhost:3000/events');
    };

    dataFactory.getEvent = function (idEvent){
        return $http.get('http://localhost:3000/events/'+idEvent);
    };

    return dataFactory;

}]);
