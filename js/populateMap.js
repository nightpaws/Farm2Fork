/**
 * Created by williamtetlow on 21/04/15.
 */

/*jslint node: true, browser: true */
"use strict";

function populateMap() {

    // Private function used for creating markers and adding them to map
    var codeAddress = function (addr) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address' : addr}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var marker = new google.maps.Marker({
                        map: window.map,
                        position: results[0].geometry.location
                    });
                }
            });

        },
        // Private function used to create address from JSON object
        callBack = function (data) {
            for (var i = 0; i < data.length; i++) {
                var address = data[i][0] + "," + data[i][1] + "," + data[i][2] + "," + data[i][3];
                codeAddress(address);
            }
        };

    // AJAX used for getting farm data from database as JSON object

    var xmlHttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlHttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callBack(JSON.parse(xmlHttp.responseText));
        }
    };

    xmlHttp.open("GET", "Ajax/getFarms.php", true);
    xmlHttp.send();

}