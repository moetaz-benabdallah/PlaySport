'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory, $routeParams, GroundsFactory) {

    $scope.event = {};
    $scope.ground = {};

    $scope.eventNew = {};
    $scope.dateEvent = 0;

    if($routeParams.idEvent != null){
        EventsFactory.getEvent($routeParams.idEvent).success(function (event) {
            $scope.event = event[0];
            GroundsFactory.getGround(event[0].groundID).success(function (ground) {
                $scope.ground = ground;
            });
        });
    }

    loadEvents();

    function loadEvents(){
        EventsFactory.events().success(function (response) {

            for(var i = 0; i < response.length; i++){
                var date = new Date(response[i].date);
                console.log(date);
            }

            $scope.events = response;
        });
    }


    $scope.newEvent = function () {

        alert($scope.dateEvent);
    };
});

