'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.Home',
    'myApp.Events',
    'myApp.Grounds',
    'myApp.version',
    'myApp.teamProfile',
    'myApp.news',
    'myApp.eventsServices',
    'myApp.groundsServices',
    'myApp.FindGame'

]).
config(['$routeProvider', function($routeProvider) {

     $routeProvider
            .when('/home',{
                templateUrl:'Home/home.html',
                controller: 'HomeCtrl'
            })

            .when('/about',{
                templateUrl:'About/about.html',
                controller: ''
            })

            .when('/sports',{
                templateUrl:'Sports/sports.html',
                controller: ''
            })

            .when('/gallery',{
                templateUrl:'Gallery/gallery.html',
                controller: ''
            })

            .when('/news',{
                templateUrl:'News/news.html',
                controller: ''
            })

            .when('/grounds',{
                templateUrl:'Grounds/grounds.html',
                controller: 'GroundsCtrl'
            })

            .when('/ground/details',{
                templateUrl:'Grounds/ground-details.html',
                controller: ''
            })

            .when('/myGrounds',{
                templateUrl:'Grounds/ground-owner.html',
                controller: ''
            })

            .when('/findGame',{
                templateUrl:'FindGame/findGame.html',
                controller: 'FindGameCtrl'
            })

            .when('/teamProfile',{
                templateUrl:'TeamProfile/teamProfile.html',
                controller: 'teamProfileCtrl'
            })

            .when('/teamProfile/calandar',{
                templateUrl:'TeamProfile/calandar.html'
            })

            .when('/events',{
                templateUrl:'Events/events.html',
                controller: 'EventsCtrl'
            })

            .when('/events/:idEvent',{
                 templateUrl:'Events/eventShow.html',
                 controller: 'EventsCtrl'
             })

             .when('/owner',{
                 templateUrl:'Events/groundOwnerProfile.html',
                 controller: 'EventsCtrl'
             })

            .when('/success',{
                templateUrl:'Events/success.html',
                controller: ''
            })

            .when('/waiting',{
                templateUrl:'Events/waiting.html',
                controller: ''
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

            .when('/stats',{
                templateUrl:'Stats/stats.html',
                controller: 'statsCtrl'
            })

             .when('/communities',{
                templateUrl:'CommunitiesList/communitiesList.html',
                controller: 'communitiesListCtrl'
            })

             .when('/invitations',{
                templateUrl:'Invitations/invitations.html',
                controller: ''
            })

            .when('/teamProfile/news',{
                templateUrl:'TeamProfile/news.html',
                controller: 'newsCtrl'
            })

            .when('/login',{
                templateUrl:'User/login.html'
            })

            .when('/signup',{
                templateUrl:'User/signup.html'
            })

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
