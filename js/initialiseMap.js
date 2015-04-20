/* 
 * Function to set the properties of the 
 */

/*jslint node: true, browser: true */
"use strict";

function initialise() {
    var mapProp = {
        center: new google.maps.LatLng(55.8599764, -4.2511268),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },
        updatePosition = function(position) {
            mapProp = {
                center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        },
        getLocation = function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(updatePosition);
            }
        };
    getLocation();
    window.map = new google.maps.Map(document.getElementById("mapDiv"), mapProp); /*Create map object in div*/
}
google.maps.event.addDomListener(window, 'load', initialise); /*Calls initialise function upon load*/