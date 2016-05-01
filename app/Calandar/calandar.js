'use strict';

angular.module('myApp.calandar', ['ngRoute','ngResource'])

.factory('Calandar',function($resource) {
  return $resource('http://localhost:4000/game');
})


.controller('calandarCtrl', function($scope, Calandar,$http,$route,$routeParams) {
       
    $scope.communityid = $routeParams.param; 
     $scope.gameData = {};
    $scope.newgame = function() {
         $scope.gameData._teams=$routeParams.param ;
           
             console.log( $scope.gameData);
             
        var game = new Calandar($scope.gameData);
        game.$save();
        $route.reload();  
        
      
  }
    
       $http.get("http://localhost:4000/game/"+$routeParams.param)
   .then(function(response) {
       
        $scope.games = response.data;
     
    });
    

});