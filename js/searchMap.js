/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function searchMap(){
    var postcodeInputElement = document.getElementById("postcodeInput");
    var searchTerm = postcodeInputElement.value;
    var  geocoder = new google.maps.Geocoder();
    searchTerm += ", UK";
    console.log(searchTerm);
    geocoder.geocode({ 'address': searchTerm}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            map.setCenter(location);
            //map.setZoom(15);
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      
    
}

