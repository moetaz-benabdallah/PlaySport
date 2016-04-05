var services = angular.module('myApp.groundsServices', []);

services.factory('GroundsFactory', ['$http', function ($http){

    var dataFactory = {};

    dataFactory.grounds = function (){
        return $http.get('http://localhost:3000/grounds/grounds');
    };

    return dataFactory;

}]);
