/* 
 * Initialise function is used to create google map object on loading of map.html
 */

/*jslint node: true, browser: true */
"use strict";

function initialise() {

    var mapProp = {
            // Maps initial location is set to city centre glasgow if no location services
            center: new google.maps.LatLng(55.8599764, -4.2511268),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
    // Function used for updating position if location services allowed by device
        updatePosition = function (position) {
            mapProp.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            mapProp.zoom = 13;
        },
    // Gets geolocation of device in use if location services allowed by device
        getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(updatePosition);
            }
        };
    getLocation();
    window.map = new google.maps.Map(document.getElementById("mapDiv"), mapProp); /*Create map object in div*/
    populateMap();


}

google.maps.event.addDomListener(window, 'load', initialise); /*Calls initialise function upon load*/