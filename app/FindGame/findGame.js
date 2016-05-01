'use strict';

angular.module('myApp.FindGame', ['ngCordova','ngResource'])

.controller('FindGameCtrl', function($scope, $location, $cordovaGeolocation, MyGamesFactory, MyGroundsFactory, OrganizeGameFactory) {
    var
    listGrounds = MyGroundsFactory.query();
console.log(listGrounds);
        var
    listGames = MyGamesFactory.query();
    console.log(listGames);

    $scope.events = listGames;
    $scope.grounds = listGrounds;
    console.log($scope.events);
    console.log(listGames);
angular.module('myApp.FindGame', ['ngCordova','ngResource'])

.controller('FindGameCtrl', function($scope, $cordovaGeolocation, GamesFactory, GroundsFactoryy) {
    var
    listGrounds = GroundsFactoryy.query();
console.log(listGrounds);
        var
    listGames = GamesFactory.query();
    console.log(listGames);


    //for(var i=0; i<listGames.length; i++){
    //    for(var j=0; j<listGrounds.length; j++) {
    //
    //       if ( listGames[i].d.groundID == listGrounds[j].d._id){
    //           listGames[i].location = listGrounds[j].name;
    //           console.log(listGames[i].groundID);
    //       }
    //    }
    //}

    $scope.games = listGames;
    console.log($scope.games);
    console.log(listGames);
     /////////////////////MAP//////////////////////
   // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    var options = {timeout: 10000, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }, function(error){
    console.log("Could not get location");
  });
    //////////////////////////////////////////////////

    $scope.game=new OrganizeGameFactory();
    $scope.organizeGame=function(){


        $scope.game.$save();
        $location.path("/waiting");
    }
})



    .factory('OrganizeGameFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/games/store');

    })

    .factory('MyGamesFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/events');

    })


    .factory('MyGroundsFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/grounds/grounds');

    })

})

    .factory('GamesFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/events');

    })
    .factory('GameDetailsFactory', function($resource){
        //Resource
        return $resource('http://localhost:3000/events/:id');

    })

    .factory('GroundsFactoryy', function($resource){
        //Resource
        return $resource('http://localhost:3000/grounds/grounds');

    })
;
