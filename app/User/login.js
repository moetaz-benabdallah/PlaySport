'use strict';

angular.module('myApp.Login', ['ngRoute','ngCookies','ngStorage'])




        .controller('LoginCtrl', function($scope, $http, $location, $cookies, $rootScope, $localStorage, FacebookFactory, FacebookFriendsFactory,
                                          LoginFacebookFactory, LocalLoginFactory) {

            // Local Login

            $scope.localLogin = function(){

            }

            //////////////////////////////////////////////////////////////////

//FB LOGIN
            $scope.myFacebookLogin =function () {
                FB.init({

                    appId:'1748798672016164',
                    redirect_uri:'http://localhost:1852/PlaySport/app/index.html#/profile',
                    cookie:true, status:true, xfbml:true

                });
                FB.login(function(response) {
                    FB.getLoginStatus(function(response) {
                        statusChangeCallback(response);
                    });
                    function statusChangeCallback (){
                    if (response.status === 'not_authorized') {
                        // The person is logged into Facebook, but not your app.
                        document.getElementById('status').innerHTML = 'Please log ' +
                            'into this app.';
                    }
                         else
                    if (response.status === 'connected') {
                        console.log('Welcome!  Fetching your information.... ');

                        //FB.api('/me', function(response) {
                        //    console.log('Good to see you, ' + response.name + '.');
                        //});

                        FB.api(
                            '/me',
                            'GET',
                            {"fields":"id,name,birthday,email,education,first_name,favorite_teams,hometown,age_range,gender,devices,location,locale,posts,about,tagged_places,photos,picture,interested_in"},
                            function(response) {

                                console.log(response);
                                $location.path('/profile');
                                console.log(response.name);
                                $cookies.put("name", response.name);
                                $cookies.put("birthday", response.birthday);
                                $cookies.put("picture", response.picture.data.url);
                                $cookies.put("education", response.education);
                                $cookies.put("favorite_teams", response.favorite_teams);
                                $scope.profile = response;
                                $scope.profile.name = $cookies.get('name');
                                $scope.profile.picture = $cookies.get('pic');
                                $scope.profile.birthday = response.birthday;
                                $scope.profile.favorite_teams = response.favorite_teams;
                                $scope.profile.education = response.education;

                                $localStorage.message = response;
                            }
                        );
                    }
                        else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }});

            }



            /****************************************************/
            //Another FBLOGIN
            //var p =[];
            //$scope.loginFacebook = function(){
            //
            //   // FB.login(function(){}, {scope: 'publish_actions'});
            //
            //    p=FacebookFactory.success(function (response) {
            //
            //        $scope.profile.name = response.name;
            //        $scope.profile.picture = response.picture.data.url;
            //        console.log(response.name);
            //
            //        console.log(response);
            //
            //
            //        return response;
            //    });
            //    $location.path('/profile');
            //}


/*********************************************************************/
            FB.init({

                appId:'1748798672016164', cookie:true, status:true, xfbml:true

            });

            $scope.FacebookInviteFriends = function()

            {
                FB.ui({ method: 'send',name: 'Lets play sport lets have fun !!',
                    link: 'http://facebook.com',
                    description: 'We Mean IT',
                    picture: 'https://parson9.files.wordpress.com/2009/09/i-mean-it.jpg'});
            }

            $scope.FacebookFriends = function() {
                var p =$http.get('http://localhost:3000/fbFriends').success(function(response){

                        console.log(response);

                });
                // p =FacebookFriendsFactory.success(function (response) {
                //    return response;
                //});
                //console.log(p);
            }

        })

    .factory('LocalLoginFactory', function($http){
        //Resource

        return $http.get('http://localhost:3000/users/login');

    })



        .factory('FacebookFactory', function($http){
            //Resource

            return $http.get('http://localhost:3000/fbService/fbProfile');

        })

    .factory('LoginFacebookFactory', function($http){
        //Resource

        return $http.get('http://localhost:3000/fbService/login');

    })

        .factory('FacebookFriendsFactory', function($http){
            //Resource

            return $http.get('http://localhost:3000/fbFriends');

        })
;

