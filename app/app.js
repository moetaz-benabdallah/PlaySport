'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.Home',
    'myApp.Events',
    'myApp.Grounds',
    'myApp.version',
    'myApp.teamProfile',
    'myApp.eventsServices',
    'myApp.groundsServices'
]).
config(['$routeProvider', function($routeProvider) {

     $routeProvider
            .when('/home',{
                templateUrl:'Home/home.html',
                controller: 'HomeCtrl'
            })

            .when('/events',{
                templateUrl:'Events/events.html',
                controller: 'EventsCtrl'
            })

            .when('/teamProfile',{
                templateUrl:'TeamProfile/teamProfile.html',
                controller: 'teamProfileCtrl'
            })

            .when('/teamProfile/calandar',{
                templateUrl:'TeamProfile/calandar.html'
            })

            .when('/stats',{
                templateUrl:'TeamProfile/stats.html'
            })

     //espace arbitre
            .when('/referee',{
                templateUrl:'Referee/referee.html',
                controller: 'RefereeCtrl'
            })
     //espace arbitre---Article Space
            .when('/article',{
                templateUrl:'Referee/article.html',
                controller: 'ArticleCtrl'
            })

     //espace arbitre---TimeLine
            .when('/timeline',{
                templateUrl:'Referee/timeline.html',
                controller: 'TimelineCtrl'
            })


  $routeProvider.otherwise({redirectTo: '/home'});
}]);
