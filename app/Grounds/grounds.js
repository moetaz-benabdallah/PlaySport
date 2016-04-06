'use strict';

angular.module('myApp.Grounds', ['ngRoute'])


    .controller('GroundsCtrl', function($scope, GroundsFactory) {

        loadGrounds();

        function loadGrounds(){
            GroundsFactory.grounds().success(function (response) {
                //console.log(response);
                $scope.grounds = response;
            });
        }
    });
