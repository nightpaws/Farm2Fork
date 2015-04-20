/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*jslint node: true, browser: true */
"use strict";

function searchMap() {
    var moveLocation = function () {
        var postcodeInputElement = document.getElementById("postcodeInput"),
            searchTerm = postcodeInputElement.value,
            geocoder = new google.maps.Geocoder();

        searchTerm += ", UK";
        geocoder.geocode({ 'address': searchTerm}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var location = results[0].geometry.location;
                window.map.setCenter(location);
            //map.setZoom(15);
            } else {
                postcodeInputElement.value = "Invalid Postcode";
            }
        });
    },
        checkForReturn = function (e) {
            if (e.keyCode === 13) {
                moveLocation();
            }
        },
        talkToDB = function (e) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            var x = xmlhttp.open("GET", "getFarms.php", true);
            xmlhttp.send();
        };

    var button = document.getElementById("clickPostCode");
    button.addEventListener("click", moveLocation);
    document.getElementById("postcodeInput").addEventListener("keydown", checkForReturn, false);
    
}



