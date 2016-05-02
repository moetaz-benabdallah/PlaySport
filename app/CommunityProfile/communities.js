'use strict';

angular.module('myApp.communities', ['ngRoute','ngResource'])

.factory('Community',function($resource) {
  return $resource('http://localhost:4000/community');

})

.controller('communitiesCtrl', function($scope, Community,$http,$route,$window,$location) { 
    $scope.communityData = {};
    $scope.newCommunity = function() {
         var c1 = document.getElementById('c1'), 
             c2 = document.getElementById('c2')
         if (c1.checked)  $scope.communityData.is_community= true;
         if (c2.checked)  $scope.communityData.is_community= false;    
        
       $scope.community = new Community($scope.communityData);
        $scope.community.$save(); 
        
       
/*                $scope.go = function(param) {
  $location.path('#/communityProfile/'+);
        
};*/
        
        
  }

    $scope.communities = Community.query();
      
    
  });
