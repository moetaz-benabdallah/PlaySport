'use strict';

angular.module('myApp.singleNews', ['ngRoute','ngResource'])

.factory('Comment',function($resource) {
  return $resource('http://localhost:4000/comments')
                 
})

.controller('singleNewsCtrl', function($scope, Comment,$http,$route,$routeParams) {
  
    //news
   $http.get("http://localhost:4000/tweeter/news/"+$routeParams.param)
   .then(function(response) {
        $scope.singlenews = response.data;

    });
    
    //comments
    $scope.commentData = {};
    $scope.newComment = function() {
        $scope.commentData._from='56deffc31de606f01fe4a405' ;
        $scope.commentData._newsid= $routeParams.param;
    var comment = new Comment($scope.commentData);
    comment.$save();
    $route.reload();  
  }
    
    $http.get("http://localhost:4000/comments/"+$routeParams.param)
       .then(function(response) {
            $scope.comments = response.data;

        });
    
    $scope.emojiMessage={};
  
});