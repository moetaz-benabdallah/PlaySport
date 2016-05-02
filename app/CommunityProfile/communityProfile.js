'use strict';

angular.module('myApp.communityProfile', ['ngRoute','ngResource'])

.factory('CommunityProfile',function($resource) {
  return $resource('http://localhost:4000/invite/:email');

})

.controller('communityProfileCtrl', function($scope, CommunityProfile,$http,$route,$window,$location,$routeParams) { 

      $http.get("http://localhost:4000/community/"+$routeParams.param)
   .then(function(response) {
       
        $scope.community = response.data;
     
    });

     $scope.users = CommunityProfile.query();
    
    $scope.invite=function(email) {
    $http.get("http://localhost:4000/invite/:"+email)
   .then(function(response) {
        console.log('bien');
    });
       $route.reload();
   }
    
  });