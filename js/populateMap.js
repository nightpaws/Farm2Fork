/**
 * Created by williamtetlow on 21/04/15.
 */

/*jslint node: true, browser: true */
"use strict";

function populateMap() {

    // Private function used for creating markers and adding them to map

    var codeAddress = function (addr, id, isFarmData, data) {

            // geocoder used for geocoding address
            var geocoder = new google.maps.Geocoder();

            // geocode address
            geocoder.geocode({'address': addr}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var imageUrl,
                        url,
                        farm;

                    // Check if data for new marker is farm or market
                    if (isFarmData) {
                        imageUrl = 'images/farmIcon.png';
                        url = 'farmProfileFromFavourites.html';
                        farm = data;
                    } else {
                        imageUrl = 'images/marketIcon.png';
                        url = "marketProfile.html";
                        farm = null;
                    }

                    // Create image object for marker
                    var image = {
                        url: imageUrl,
                        size: new google.maps.Size(100, 100),
                        // The origin for this image is 0,0.
                        origin: new google.maps.Point(0, 0)
                    };

                    // Create marker
                    var marker = new google.maps.Marker({
                        map: window.map,
                        position: results[0].geometry.location,
                        icon: image,
                        id: id,
                        url: url,
                        isFarm: isFarmData,
                        farmData: farm
                    });

                    // Add listener to each marker to redirect to farm/market profile on click
                    google.maps.event.addListener(marker, 'click', function () {
                        if (window.localStorage) {
                            if (this.isFarm) {
                                localStorage.setItem("lastFarmScanned", JSON.stringify(this.farmData));
                                window.location = this.url;
                            } else {
                                localStorage.setItem("marketFromMapID", this.id);
                                window.location = this.url;
                            }
                        }

                    });
                }
            });

        },
    // Private function used to create address from JSON object
        callBack = function (data, isFarmData) {
            for (var i = 0; i < data.length; i++) {

                var address, id;
                if(isFarmData) {
                    address = data[i][0] + "," + data[i][5] + "," + data[i][6] + "," + data[i][7];
                    id = data[i][9];
                } else {
                    address = data[i][0] + "," + data[i][1] + "," + data[i][2] + "," + data[i][3];
                    id = data[i][4];
                }

                var farmData = null;
                if (isFarmData) {
                    farmData = {
                        name: data[i][0],
                        operations: data[i][1],
                        crops: data[i][2],
                        bio: data[i][3],
                        organic: data[i][4],
                        street: data[i][5],
                        town: data[i][6],
                        postcode: data[i][7],
                        phone: data[i][8],
                        id: data[i][9]
                    };
                }

                codeAddress(address, id, isFarmData, farmData);
            }
        },
    // Function used for getting farms from db
        getFarms = function () {
            // AJAX used for getting farm data from database as JSON object

            var xmlHttp;

            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlHttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    callBack(JSON.parse(xmlHttp.responseText), true);
                }
            };

            xmlHttp.open("GET", "ajax/getFarms.php", true);
            xmlHttp.send();
        },
    // Functions used for getting markets from db
        getMarkets = function () {
            // AJAX used for getting market data from database as JSON object

            var xmlHttp;

            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlHttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    callBack(JSON.parse(xmlHttp.responseText), false);
                }
            };

            xmlHttp.open("GET", "ajax/getMarkets.php", true);
            xmlHttp.send();
        };


    getFarms();
    getMarkets();


}