var services = angular.module('myApp.groundsServices', []);

services.factory('GroundsFactory', ['$http', function ($http){

    var dataFactory = {};

    dataFactory.grounds = function (){
        return $http.get('http://localhost:3000/grounds/grounds');
    };

    dataFactory.getGround = function (idGround){
        return $http.get('http://localhost:3000/grounds/show/'+idGround);
    };

    dataFactory.addGround = function (ground){
        return $http.post('http://localhost:3000/grounds/newground', ground );
    };

    dataFactory.geocode = function (location) {
        return $http.get('https://maps.googleapis.com/maps/api/geocode/json?&address='+location);
    };

    dataFactory.uploadPicture = function (idGround) {
        return $http.post('http://localhost:3000/grounds/show/'+idGround, null);
    };

    return dataFactory;

}]);
