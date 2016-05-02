'use strict';

angular.module('myApp.invite', ['ngRoute','ngResource'])

.factory('Invite',function($resource) {
  return $resource('http://localhost:4000/invitation');
})

.controller('inviteCtrl', function($scope, Invite,$http,$route,$routeParams) {
    
     $scope.invitatonData = {};
    $scope.newinvitation = function() {
         $scope.invitatonData.to=$routeParams.param2 ;
           $scope.invitatonData.from=$routeParams.param1 ;
             console.log( $scope.invitatonData);
             
        var invitation = new Invite($scope.invitatonData);
        invitation.$save();
        $route.reload();  
       
  }  
  
    
  });
