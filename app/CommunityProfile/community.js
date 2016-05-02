'use strict';

angular.module('myApp.community', ['ngRoute','ngResource'])

.factory('Community',function($resource) {
  return $resource('http://localhost:4000/community/:id')
                 
})

.controller('communityCtrl', function($scope, Community,$http,$routeParams) {
    /*var test = [];
   test = Community.query();
   $scope.history = test;*/
 
   
   $http.get("http://localhost:4000/community/"+$routeParams.param)
   .then(function(response) {
       
        $scope.community = response.data;
       console.log($scope.community);
    });
    
    
    
    
    
  
    
/*    var entry = Community.get({ id:$routeParams.param }, function() {
    console.log(entry);
  }); // get() returns a single entry*/


    
    
    
    
 
    
    
});
