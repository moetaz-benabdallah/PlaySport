'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory, $routeParams, GroundsFactory) {

    $scope.event = {};
    $scope.ground = {};

    $scope.eventNew = {};

    if($routeParams.idEvent != null){
        EventsFactory.getEvent($routeParams.idEvent).success(function (event) {
            $scope.event = event[0];
            GroundsFactory.getGround(event[0].groundID).success(function (ground) {
                console.log('test');
                console.log(ground);
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

    loadGrounds();
    function loadGrounds(){
        GroundsFactory.grounds().success(function (response) {
            //console.log(response);
            $scope.grounds = response;
        });
    }


    $scope.newEvent = function () {
        var event = $scope.eventNew;
        EventsFactory.addEvent(event).success(function (response) {
            //console.log(response);
            //alert('New Event added!');
        });
    };
});

