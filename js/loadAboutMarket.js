/**
 * Created by williamtetlow on 28/04/15.
 */

function loadAboutMarket() {
    var marketId = localStorage.getItem("marketFromMapID"),
        callbackMarket = function (data) {
            var market = {
                name: data[0][0],
                street: data[0][1],
                town: data[0][2],
                postcode: data[0][3],
                telephone: data[0][4]
            };
            document.getElementById('aboutMarketName').innerHTML = market.name;
            document.getElementById('street').innerHTML = market.street;
            document.getElementById('town').innerHTML = market.town;
            document.getElementById('postcode').innerHTML = market.postcode;
            document.getElementById('telephone').innerHTML = market.telephone;
        },
        marketAbout = function () {
            var xmlHttp;

            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlHttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    console.log(xmlHttp.responseText);
                    callbackMarket(JSON.parse(xmlHttp.responseText));
                }
            };

            xmlHttp.open("GET", "ajax/getMarketFromMap.php?f="+marketId, true);
            xmlHttp.send();
        };

    marketAbout();
}

loadAboutMarket();
