/**
 * Created by Donia on 19/04/2016.
 */
'use strict';

angular.module('myApp.FacebookProfile', ['ngResource','ngCookies','ngStorage'])

    .controller('FacebookProfileCtrl', function($scope, $localStorage, FacebookProfileFactory,$cookies) {


        $scope.profile =$localStorage.message ;
        console.log($scope.profile);
        //var p = [];
        //p = FacebookProfileFactory.success(function (response) {
        //
        //    console.log(response);
        //    $cookies.put("name", response.name);
        //    $cookies.put("birthday", response.birthday);
        //    console.log($cookies.get('name'));
        //    $cookies.put("pic", response.picture.data.url);
        //
        //    $scope.profile = p;
        //    $scope.profile.name = $cookies.get('name');
        //    $scope.profile.picture = $cookies.get('pic');
        //    $scope.profile.birthday = response.birthday;
        //    $scope.profile.favorite_teams = response.favorite_teams;
        //    $scope.profile.education = response.education;
        //    console.log($scope.profile);
        //    console.log($scope.profile.name);
        //
        //});

    })
    .factory('ProfileFactory', function($http){
        //Resource
        // return $resource('http://localhost:3000/fbService/fbProfile');
        return $http.get('http://localhost:3000/fbService/fbProfile');

    })

    .factory('FacebookProfileFactory', function($http){
        //Resource
       // return $resource('http://localhost:3000/fbService/fbProfile');
        return $http.get('http://localhost:3000/fbService/fbProfile');

    })

    .factory('MyGamesFbFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/games');

    })

;