
/*jslint node: true, browser: true */
"use strict";

// Function used for searching map if user wants to specify a postcode
function searchMap() {

    var postcodeInputElement = document.getElementById("postcodeInput"),
        searchTerm = postcodeInputElement.value,
        geocoder = new google.maps.Geocoder();

    if (searchTerm !== "Input a Postcode") {
        searchTerm += ", UK";
        geocoder.geocode({'address': searchTerm}, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var location = results[0].geometry.location;
                window.map.setCenter(location);
            } else {
                postcodeInputElement.value = "Invalid Postcode";
            }
        });
    }


}








