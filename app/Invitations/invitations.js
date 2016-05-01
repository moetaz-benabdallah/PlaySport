'use strict';

angular.module('myApp.invitations', ['ngRoute','ngResource'])

.factory('Invitations',function($resource) {
  return $resource('http://localhost:4000/invitation/:id',{id: "@id"});


})

.controller('invitationsCtrl', function($scope, Invitations,$http,$route,$routeParams) {
   
   $http.get("http://localhost:4000/invitation/"+$routeParams.param)
   .then(function(response) {
       
        $scope.invitations = response.data;
       console.log($scope.invitations);
    });
    
    $scope.communityid = $routeParams.param; 
    
  });

























