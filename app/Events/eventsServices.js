var services = angular.module('myApp.eventsServices', []);

services.factory('EventsFactory', ['$http', function ($http){

    var dataFactory = {};

    dataFactory.events = function (){
        return $http.get('http://localhost:3000/events');
    };

    dataFactory.getEvent = function (idEvent){
        return $http.get('http://localhost:3000/events/'+idEvent);
    };

    dataFactory.addEvent = function (event) {
        return $http.post('http://localhost:3000/events/newEvent', event);
    };

    return dataFactory;

}]);
