'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory) {

    loadEvents();

    function loadEvents(){
        EventsFactory.events().success(function (response) {

            for(var i = 0; i < response.length; i++){
                console.log(response[i].groundID);
            }

            $scope.events = response;
        });
    }
});
