'use strict';

angular.module('myApp.Home', ['ngRoute','ngResource'])

.factory('Community',function($resource) {
  return $resource('http://localhost:4000/tweeter/history')
                 
})

.controller('HomeCtrl', function($scope, Community,$http) {
   var test = [];
        
   test = Community.query();
   $scope.history = test;
    $scope.myvar = new Date(); 
   $http.get("http://localhost:4000/tweeter/news")
   .then(function(response) {
        $scope.news = response.data;
    });

    $http.get("http://localhost:3000/weather")
   .then(function(response) {
        $scope.wea = response.data;
    });s
});
