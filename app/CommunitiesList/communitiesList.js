'use strict';

angular.module('myApp.communitiesList', ['ngRoute','ngResource'])

.factory('CommunityAndTeams',function($resource) {
  return $resource('http://localhost:4000/community/all');

})
.controller('communitiesListCtrl', function($scope, CommunityAndTeams,$http,$route,$routeParams,$location) {
         $scope.communities = CommunityAndTeams.query();
    

    
    $scope.go = function (id_team) {
  $location.path('/invite/'+$routeParams.param+"/"+id_team);
};
    
    $scope.communityid = $routeParams.param; 
      
});