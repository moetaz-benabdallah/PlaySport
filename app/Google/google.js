'use strict';

angular.module('myApp.Google', ['ngRoute'])

    .controller('GoogleCtrl', function($scope, $http, $window, $cookies) {

        var url;
        var windowThatWasOpened;

        $http.get("http://localhost:3000/googleplus/url").then(function(response) {
            url = response.data;
        });

        $scope.login = function() {
            windowThatWasOpened = $window.open(url, "Please sign in with Google", "width=300px,height:300px");
        };

        window.onmessage = function(e) {
            windowThatWasOpened.close();
            var urlWithCode = e.data;
            var idx = urlWithCode.lastIndexOf("code=");
            var code = urlWithCode.substring(idx + 5).replace("#","");

            console.log(code);

            $http.get("http://localhost:3000/googleplus/tokens?code=" + code).then(function(response) {
                console.log(response.data.access_token);
                $cookies.put('access_token', response.data.access_token);

                $http.get('http://localhost:3000/googleplus/profile/'+$cookies.get('access_token')).then(function (profile) {
                    $scope.profile = profile.data;
                    console.log(profile.data);
                });

            });

        };

    })

    .controller('GoogleProfileCtrl', function ($scope, $http, $cookies){
        $scope.getProfile = function () {
            $http.get('http://localhost:3000/googleplus/profile/'+$cookies.get('access_token')).then(function (profile) {
                console.log(profile.data);
            });
        };
    })
