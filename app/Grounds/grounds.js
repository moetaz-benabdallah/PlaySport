'use strict';

angular.module('myApp.Grounds', ['ngRoute'])

.controller('GroundsCtrl', function($scope, GroundsFactory, EventsFactory) {

        $scope.groundNew = {};

        loadGrounds();
        function loadGrounds(){
            GroundsFactory.grounds().success(function (response) {
                EventsFactory.events().success(function (events) {

                    var eventsWithDays = {};
                    var tabEventsWithDays = new Array();

                    var upcomingevent = {};

                    for(var i = 0; i < events.length; i++){
                        var date = new Date(events[i].date);
                        var now = new Date();
                        var _MS_PER_DAY = 1000 * 60 * 60 * 24;

                        var utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
                        var utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

                        var daysDiff = Math.floor((utc2 - utc1) / _MS_PER_DAY);
//alert(daysDiff);
                        eventsWithDays.days = daysDiff;
                        eventsWithDays.event = events[i];
                        tabEventsWithDays.push(eventsWithDays);
                    }
console.log(tabEventsWithDays[1].days);
                    upcomingevent = tabEventsWithDays[0];
                    for(var i = 1; i < tabEventsWithDays.length; i++){
                        if(tabEventsWithDays[i].days < upcomingevent.days){
                            upcomingevent = tabEventsWithDays[i];
                        }
                    }

                    console.log(upcomingevent);

                });
                $scope.grounds = response;
            });
        }


        $scope.newGround = function () {
            var ground = $scope.groundNew;
            GroundsFactory.addGround(ground).success(function (response) {
                console.log(response);
                alert('New ground added!');
            });
        };

    });


