'use strict';

angular.module('myApp.Grounds', ['ngRoute'])

.controller('GroundsCtrl', function($scope, GroundsFactory, EventsFactory, $routeParams, $route, $sce) {

        $scope.groundNew = {};
        $scope.ground = {};

        if($routeParams.idGround != null){
            $scope.pic = $sce.trustAsResourceUrl("http://localhost:3000/grounds/show/"+$routeParams.idGround);
            GroundsFactory.getGround($routeParams.idGround).success(function (ground) {
                $scope.ground = ground;
            });
        }

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


        $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
            //console.log(document.getElementById('autocomplete').value);
            $scope.groundNew.location = document.getElementById('autocomplete').value;
        });


        $scope.newGround = function () {
            var ground = $scope.groundNew;
            ground.location = document.getElementById('autocomplete').value;
            ground.lat = document.getElementById('lat').value;
            ground.lng = document.getElementById('lng').value;
            GroundsFactory.addGround(ground).success(function (response) {
                console.log(response);
                alert('New ground added!');
                $route.reload();
            });
        };

        $scope.upload = function () {

        };


        /* map initialization */
    $scope.initializeClickMap = function() {


        var mapOptions = {
            center: new google.maps.LatLng(36.840064620377674, 10.0360107421875),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var infoWindow = new google.maps.InfoWindow();
        var latlngbounds = new google.maps.LatLngBounds();

        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        google.maps.event.addListener(map, 'click', function (e) {

            var latlng = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());

            var marker = new google.maps.Marker({
                position: latlng,
                map: map,
                title: 'this'
            });

            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        //alert("Location: " + results[1].formatted_address + "\r\nLatitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
                        document.getElementById('autocomplete').value = results[1].formatted_address;
                        //$scope.groundNew.location = document.getElementById('autocomplete').value;

                        document.getElementById('lat').value = e.latLng.lat();
                        //$scope.groundNew.lat = document.getElementById('lat').value;

                        document.getElementById('lng').value = e.latLng.lng();
                        //$scope.groundNew.lng = document.getElementById('lng').value;
                        marker.setMap(null);
                    }
                }
            });

        });




    }

        /* */



    /* Map 2 */

    var map, places, iw;
    var markers = [];
    var searchTimeout;
    var centerMarker;
    var autocomplete;
    var hostnameRegexp = new RegExp('^https?://.+?/');


    function initialize() {



        if($routeParams.idGround != null){
            GroundsFactory.getGround($routeParams.idGround).success(function (ground) {


                    var myLatlng = new google.maps.LatLng(ground.ground.lat,ground.ground.lng);
                    var myOptions = {
                        zoom: 15,
                        center: myLatlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                    map = new google.maps.Map(document.getElementById('map'), myOptions);
                    places = new google.maps.places.PlacesService(map);
                    google.maps.event.addListener(map, 'tilesloaded', tilesLoaded);

                    document.getElementById('keyword').onkeyup = function(e) {
                        if (!e) var e = window.event;
                        if (e.keyCode != 13) return;
                        document.getElementById('keyword').blur();
                        search(document.getElementById('keyword').value);
                    }

                    var typeSelect = document.getElementById('type');
                    typeSelect.onchange = function() {
                        search();
                    };

                    var rankBySelect = document.getElementById('rankBy');
                    rankBySelect.onchange = function() {
                        search();
                    };




            });
        }






    }

    function tilesLoaded() {
        search();
        google.maps.event.clearListeners(map, 'tilesloaded');
        google.maps.event.addListener(map, 'zoom_changed', searchIfRankByProminence);
        google.maps.event.addListener(map, 'dragend', search);
    }

    function searchIfRankByProminence() {
        if (document.getElementById('rankBy').value == 'prominence') {
            search();
        }
    }

    function search() {
        clearResults();
        clearMarkers();

        if (searchTimeout) {
            window.clearTimeout(searchTimeout);
        }
        searchTimeout = window.setTimeout(reallyDoSearch, 500);
    }

    function reallyDoSearch() {
        var type = document.getElementById('type').value;
        var keyword = document.getElementById('keyword').value;
        var rankBy = document.getElementById('rankBy').value;

        var search = {};

        if (keyword) {
            search.keyword = keyword;
        }

        if (type != 'establishment') {
            search.types = [type];
        }

        if (rankBy == 'distance' && (search.types || search.keyword)) {
            search.rankBy = google.maps.places.RankBy.DISTANCE;
            search.location = map.getCenter();
            centerMarker = new google.maps.Marker({
                position: search.location,
                animation: google.maps.Animation.DROP,
                map: map
            });
        } else {
            search.bounds = map.getBounds();
        }

        places.search(search, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var icon = 'icons/number_' + (i+1) + '.png';
                    markers.push(new google.maps.Marker({
                        position: results[i].geometry.location,
                        animation: google.maps.Animation.DROP,
                        icon: icon
                    }));
                    google.maps.event.addListener(markers[i], 'click', getDetails(results[i], i));
                    window.setTimeout(dropMarker(i), i * 100);
                    addResult(results[i], i);
                }
            }
        });
    }

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
        if (centerMarker) {
            centerMarker.setMap(null);
        }
    }

    function dropMarker(i) {
        return function() {
            if (markers[i]) {
                markers[i].setMap(map);
            }
        }
    }

    function addResult(result, i) {
        var results = document.getElementById('results');
        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i% 2 == 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
            google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = 'icons/number_' + (i+1) + '.png';
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
    }

    function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
            results.removeChild(results.childNodes[0]);
        }
    }

    function getDetails(result, i) {
        return function() {
            places.getDetails({
                reference: result.reference
            }, showInfoWindow(i));
        }
    }

    function showInfoWindow(i) {
        return function(place, status) {
            if (iw) {
                iw.close();
                iw = null;
            }

            if (status == google.maps.places.PlacesServiceStatus.OK) {
                iw = new google.maps.InfoWindow({
                    content: getIWContent(place)
                });
                iw.open(map, markers[i]);
            }
        }
    }

    function getIWContent(place) {
        var content = '';
        content += '<table>';
        content += '<tr class="iw_table_row">';
        content += '<td style="text-align: right"><img class="hotelIcon" src="' + place.icon + '"/></td>';
        content += '<td><b><a href="' + place.url + '">' + place.name + '</a></b></td></tr>';
        content += '<tr class="iw_table_row"><td class="iw_attribute_name">Address:</td><td>' + place.vicinity + '</td></tr>';
        if (place.formatted_phone_number) {
            content += '<tr class="iw_table_row"><td class="iw_attribute_name">Telephone:</td><td>' + place.formatted_phone_number + '</td></tr>';
        }
        if (place.rating) {
            var ratingHtml = '';
            for (var i = 0; i < 5; i++) {
                if (place.rating < (i + 0.5)) {
                    ratingHtml += '&#10025;';
                } else {
                    ratingHtml += '&#10029;';
                }
            }
            content += '<tr class="iw_table_row"><td class="iw_attribute_name">Rating:</td><td><span id="rating">' + ratingHtml + '</span></td></tr>';
        }
        if (place.website) {
            var fullUrl = place.website;
            var website = hostnameRegexp.exec(place.website);
            if (website == null) {
                website = 'http://' + place.website + '/';
                fullUrl = website;
            }
            content += '<tr class="iw_table_row"><td class="iw_attribute_name">Website:</td><td><a href="' + fullUrl + '">' + website + '</a></td></tr>';
        }
        content += '</table>';
        return content;
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    /* end map 2*/



    });


