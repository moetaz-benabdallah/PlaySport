'use strict';

angular.module('myApp.invitation', ['ngRoute','ngResource'])

/*.factory('Invitations',function($resource) {
  return $resource('http://localhost:4000/invitation/details/:id',{id: "@id"});


})*/

.controller('invitationCtrl', function($scope,$http,$route,$routeParams) {
   
   $http.get("http://localhost:4000/invitation/details/"+$routeParams.param)
   .then(function(response) {
       
        $scope.invitation = response.data;
       /*console.log($scope.invitation);*/
    });
    
    $scope.accept = function(){
        $http.put("http://localhost:4000/invitation/Accept/"+$routeParams.param)
   .then(function(response) {
       console.log('accepted');
            $route.reload();
    });
        
    }
    
    
      $scope.decline = function(){
        $http.put("http://localhost:4000/invitation/Decline/"+$routeParams.param)
   .then(function(response) {
       console.log('refused');
            $route.reload();
    });
        
    }
    
    
  });