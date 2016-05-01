'use strict';

angular.module('myApp.referee', ['ngRoute','ngResource'])
.factory('suggFactory', function($resource){
    return {
       resource : function()
        {

return $resource('localhost:3000/suggestion', {
    get: {
      method: 'GET' // Get all suggestions
    }
  });
        }
    }

})



.controller('ArticleCtrl', [function() {

}])

.controller('SuggCtrl', function($scope, $routeParams,$http, RefereeSuggFactory) {

    loadSugg();

    function loadSugg(){
        RefereeSuggFactory.suggs().success(function(suggestion){
            $scope.sugg = suggestion;
        });
    }
})

.controller('SuggACtrl', function($scope, $routeParams,$http, RefereeSuggFactory) {

    loadSuggA();

    function loadSuggA(){
        RefereeSuggFactory.suggsA().success(function(suggestiona){
            $scope.suggA = suggestiona;
        });
    }
})

// photos instagram liké :
.controller('RefereeCtrl', function($scope, $routeParams,$http, RefereeSuggFactory) {

    loadInstaLiked();

    function loadInstaLiked(){
        RefereeSuggFactory.instaLiked().success(function(instaLiked){
            $scope.instaLiked = instaLiked;
        });
    }
})


.controller('TimelineCtrl', [function() {

}]);

