
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start;
var end;
var geocoder = new google.maps.Geocoder();
var fLat;
var fLng;
var mLat;
var mLng;




/* This function sets up and defines the Google Map API*/
function initialise() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        center : new google.maps.LatLng(55.8599764, -4.2511268),
        zoom : 25,
        mapTypeID : google.maps.MapTypeId.ROADMAP
    };
    window.map = new google.maps.Map(document.getElementById("routeDiv"), mapOptions);
    directionsDisplay.setMap(map);
    
    getData();
}

/*Call the function 'initialise' when the window loads.*/
google.maps.event.addDomListener(window, 'load', initialise); /*Calls initialise function upon load*/


 function getData() { 
    /*Retrieving necessary information from location storage to calculate route*/
    if (window.localStorage) {
        var marketData = (localStorage.getItem("market"));
        obj = JSON.parse(marketData);
        var marketStreet = obj.street;
        var marketTown = obj.town;
        var marketPostcode = obj.postcode;
        
        console.log("Market Information Required to calculate Route:");
        console.log(marketStreet);
        console.log(marketTown);
        console.log(marketPostcode);
        
        
        console.log("");
        
        var farmData = (localStorage.getItem("lastFarmScanned"));
        farmObj = JSON.parse(farmData);  
        var farmStreet = farmObj.street;
        var farmTown = farmObj.town;
        var farmPostcode = farmObj.postcode;
        
        console.log("Farm Information Required to calculate Route:");
        console.log(farmStreet);
        console.log(farmTown);
        console.log(farmPostcode);

     
        /* Geocode the farms postcode into a latitude and longitude co-ordinate */
        geocoder.geocode( { 'address': farmPostcode}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
             fLat = results[0].geometry.location.lat();
             fLng = results[0].geometry.location.lng();
             start = new google.maps.LatLng(parseFloat(fLat), parseFloat(fLng));
             console.log("START " + start);


        } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        }
  });

        /* Geocode the markets postcode into a latitude and longitude co-ordinate */
        geocoder.geocode( { 'address': marketPostcode}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            mLat = results[0].geometry.location.lat();
            mLng = results[0].geometry.location.lng();
            end = new google.maps.LatLng(parseFloat(mLat), parseFloat(mLng));
            console.log("END " + end);
            
            /* Call the calcRoute function with the newly defined values */
            calcRoute(start,end);

        } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        }
  }); 
        }
}



/* Calculate the route between the farm and the market */
function calcRoute(start, end) {

   var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
   };

 directionsService.route(request, function(result, status) {
  if (status == google.maps.DirectionsStatus.OK) {

      directionsDisplay.setDirections(result);

   var Meter2Miles = 0.000621371192 * 10 / 10; /* Value to convert from Meters to Miles */


   var durHrs =  result.routes[0].legs[0].duration.value / 3600; /* Convert seconds in to hours */
   var durMins = result.routes[0].legs[0].duration.value / 60; /* Convert seconds in to minutes */
 

   /* Work out whether duration is in hours or minutes */
    if (durHrs < 1) {
      duration = "Duration: " + Math.round(durMins) + " Mins ";
    } else if (durHrs > 1) {
      duration = "Duration: " + Math.round(durHrs) + " Hours " + Math.round(durMins) + " Mins ";
    }


    /* Display the duration and distance of the route */
    var milesDist = result.routes[0].legs[0].distance.value * Meter2Miles;
    distance = "Distance: " + Math.round(milesDist) + " Miles ";
    document.getElementById("distance").style.color = "#693F0F";
    document.getElementById("duration").style.color = "#693F0F";
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("duration").innerHTML = duration;

  

       

  }
});


 }






