'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'gm',
    'ngRoute',
    'myApp.Home',
    'myApp.Events',
    'myApp.Grounds',
    'myApp.version',
    'myApp.eventsServices',
    'myApp.groundsServices',
    'myApp.FindGame',
    'myApp.FacebookProfile',
    'myApp.Login',
    'myApp.FindGame',
    'myApp.Google',
    'ngCookies',
    'myApp.referee',
    'myApp.refereeSuggServices',
    'myApp.FindGame',
    'myApp.invitations',   
    'myApp.community',
    'myApp.news',
    'myApp.tweetinvite',
    'myApp.communities',
    'myApp.invite',
    'myApp.communityProfile',
    'myApp.invitation',
    'myApp.calandar',
    'myApp.communitiesList',
    'myApp.inviteCT',
    'myApp.singleNews'

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
                controller: 'RefereeCtrl'
            })

            .when('/news',{
                templateUrl:'News/news.html',
                controller: ''
            })

            .when('/grounds',{
                templateUrl:'Grounds/grounds.html',
                controller: 'GroundsCtrl'
            })

             .when('/groundDetails/:idGround',{
                 templateUrl:'Grounds/groundDetails.html',
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

             .when('/ownerProfile',{
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
            .when('/wait',{
             templateUrl:'Events/waiting_join.html',
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

            // les suggestions
            .when('/sugg',{
                templateUrl:'Referee/suggestion.html',
                controller:'SuggCtrl'
            })

     // les suggestions accepté
            .when('/suggA',{
                templateUrl:'Referee/suggestionAcc.html',
                controller:'SuggACtrl'
            })

     // les suggestions refusé
            .when('/suggR',{
                templateUrl:'Referee/suggestionRef.html',
                controller:'SuggRCtrl'
            })

           .when('/community/:param',{
                templateUrl:'CommunityProfile/community.html',
                controller: 'communityCtrl'
            })
            
            .when('/communityProfile/:param',{
                templateUrl:'CommunityProfile/communityProfile.html',
                controller: 'communityProfileCtrl'
            })
            
            .when('/invite/:param1/:param2',{
                templateUrl:'CommunityProfile/invite.html',
                controller: 'inviteCtrl'
            })
     
            .when('/inviteCT/:param1/:param2',{
                templateUrl:'CommunitiesList/invite.html',
                controller: 'inviteCTCtrl'
            })
            
            .when('/calandar/:param',{
                templateUrl:'Calandar/calandar.html',
                controller: 'calandarCtrl'
            })
     
            .when('/stats',{
                templateUrl:'Stats/stats.html',
                controller: 'statsCtrl'
            })
     
            /* .when('/communities',{
                templateUrl:'CommunitiesList/communitiesList.html',
                controller: 'communitiesListCtrl'
            })*/
     
             .when('/invitations/:param',{
                templateUrl:'Invitations/invitations.html',
                controller: 'invitationsCtrl'
            })
     
             .when('/invitation/:param',{
                templateUrl:'Invitations/invitation.html',
                controller: 'invitationCtrl'
            })
     
             .when('/communityProfile/:param/news',{
                templateUrl:'CommunityProfile/news.html',
                controller: 'newsCtrl'
            })
     
             .when('/tweetinvite',{
                templateUrl:'TweetAout/tweet.html',
                controller: 'tweetCtrl'
            })
     
            .when('/communities',{
                templateUrl:'CommunityProfile/communities.html',
                controller: 'communitiesCtrl'
            })
     
            .when('/singleNews/:param',{
                templateUrl:'News/singleNews.html',
                controller: 'singleNewsCtrl'
            })
            
            .when('/teams&communities/:param',{
                templateUrl:'CommunitiesList/communitiesList.html',
                controller: 'communitiesListCtrl'
            })

            .when('/login',{
                templateUrl:'User/login.html',
                controller: 'LoginCtrl'
            })

            .when('/profile',{
                templateUrl:'User/facebook-profile.html',
                controller : 'FacebookProfileCtrl'
            })

            .when('/signup',{
                templateUrl:'User/signup.html'
            })




  $routeProvider.otherwise({redirectTo: '/home'});
}]);
