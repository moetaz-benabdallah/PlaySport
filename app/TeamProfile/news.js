angular.module('myApp.news', ['ngRoute','ngResource'])

.factory('News',function($resource) {
  return $resource('http://localhost:4000/tweeter/news',{id:'@id'},
 { remove: { method: "DELETE", url: "http://localhost:4000/tweeter/deletenews/:id" },
   update: { method: 'PUT',url : "http://localhost:4000/tweeter/updatenews/:id" }
 });
    

 })

.controller('newsCtrl', function($scope, News,$http,$route) {
    $scope.newsData = {};
    $scope.newNews = function() {
      
    var news = new News($scope.newsData);
    news.$save();
    $route.reload();  
  } 
    
     $http.get("http://localhost:4000/tweeter/news/community")
     .then(function(response) {
        $scope.news = response.data;
    });
    
    $scope.deleteNews=function(id) {
       News.remove({id: id})
       $route.reload();     
    }
    
    $scope.updateNews = function(id) { 
        News.update({id: id});
    }



});
    