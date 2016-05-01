'use strict';

angular.module('myApp.inviteCT', ['ngRoute','ngResource'])

.factory('InviteCT',function($resource) {
  return $resource('http://localhost:4000/invitation');
})

.controller('inviteCTCtrl', function($scope, Invite,$http,$route,$routeParams) {
    
     $scope.invitatonData = {};
    $scope.newinvitation = function() {
         $scope.invitatonData.to=$routeParams.param ;
           
             console.log( $scope.invitatonData);
             
        var invitation = new Invite($scope.invitatonData);
        invitation.$save();
        $route.reload();  
        /*$window.location.href = '#/communityProfile';*/
  }  
  
    
  });
