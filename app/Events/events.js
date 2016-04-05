'use strict';

angular.module('myApp.Events', ['ngRoute'])


.controller('EventsCtrl', function($scope, EventsFactory) {

    loadEvents();

    function loadEvents(){
        EventsFactory.events().success(function (response) {
            $scope.events = response;
        });
    }
});
