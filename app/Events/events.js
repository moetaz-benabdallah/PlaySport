'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory, $routeParams, GroundsFactory) {

    $scope.event = {};
    $scope.ground = {};

    if($routeParams.idEvent != null){
        EventsFactory.getEvent($routeParams.idEvent).success(function (event) {
            $scope.event = event[0];
            //alert(event[0].groundID);
            GroundsFactory.getGround(event[0].groundID).success(function (ground) {
                $scope.ground = ground;
            });
        });
    }

    loadEvents();

    function loadEvents(){
        EventsFactory.events().success(function (response) {
            $scope.events = response;
        });
    }
});

