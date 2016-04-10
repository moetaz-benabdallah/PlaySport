'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory, $routeParams) {

    $scope.event = {};

    if($routeParams.idEvent != null){
        var idEvent = $routeParams.idEvent;
        EventsFactory.getEvent(idEvent).success(function (event) {
            $scope.event = event[0];
            console.log(event[0]);
        });
    }

    loadEvents();

    function loadEvents(){
        EventsFactory.events().success(function (response) {
            $scope.events = response;
        });
    }
});

