
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start;
var end;
var infowindow = new google.maps.InfoWindow();
var geocoder = new google.maps.Geocoder();
var farmAdd;
var marketAdd;
var fLat;
var fLng;
var mLat;
var mLng;
var mLocation;
var fLocation;




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

        var space = " ";

        farmAdd = farmStreet.concat(space, farmTown, space, farmPostcode);
        marketAdd = marketStreet.concat(space, marketTown, space, marketPostcode);

        console.log(farmAdd);
        console.log(marketAdd);

        geocoder.geocode( { 'address': farmPostcode}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
             fLat = results[0].geometry.location.lat();
             fLng = results[0].geometry.location.lng();
             console.log("Farm Latitude : " +fLat);
             console.log("Farm Longitude : " + fLng); 
             start = new google.maps.LatLng(String(fLat), String(fLng));
             console.log("START " + start);

             // console.log(results[0].geometry.location);
             // console.log(fLat);
             // console.log(fLng);
             // console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());

        } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        }
  });

        geocoder.geocode( { 'address': marketPostcode}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            mLat = results[0].geometry.location.lat();
            mLng = results[0].geometry.location.lng();
            end = new google.maps.LatLng(parseFloat(mLat), parseFloat(mLng));
            console.log("END " + end);
            calcRoute(start,end);
            // console.log(results[0].geometry.location);
            // console.log(mLat);
            // console.log(mLng);
            // console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());

        } else {
        console.log('Geocode was not successful for the following reason: ' + status);
        }
  }); 
        }
}




function calcRoute(start, end) {

    //  start = new google.maps.LatLng(fLat, fLng);
    //  end = new google.maps.LatLng(mLat, mLng);
    // console.log("Start " + start);
    //  console.log("End " + end);
  //start = new google.maps.LatLng(55.861298, -4.242864);
  //end = new google.maps.LatLng(55.798904, -4.330175);
   var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
   };
 directionsService.route(request, function(result, status) {
  if (status == google.maps.DirectionsStatus.OK) {

      directionsDisplay.setDirections(result);

   var Meter2Miles = 0.000621371192 * 10 / 10;

   var durHrs =  result.routes[0].legs[0].duration.value / 3600;
   var durMins = result.routes[0].legs[0].duration.value / 60;
 

    if (durHrs < 1) {
      duration = "Duration: " + Math.round(durMins) + " Mins ";
    } else if (durHrs > 1) {
      duration = "Duration: " + Math.round(durHrs) + " Hours " + Math.round(durMins) + " Mins ";
    }


    var milesDist = result.routes[0].legs[0].distance.value * Meter2Miles;
    distance = "Distance: " + Math.round(milesDist) + " Miles ";
    distance.fontcolor("red");
    document.getElementById("distance").style.color = "#693F0F";
    document.getElementById("duration").style.color = "#693F0F";
    document.getElementById("distance").innerHTML = distance;
    document.getElementById("duration").innerHTML = duration;

    infowindow.setContent(" distance: "+distance+"<br> duration: "+duration+" ");

       
         console.log(distance);
         console.log(duration);
  }
});


 }






