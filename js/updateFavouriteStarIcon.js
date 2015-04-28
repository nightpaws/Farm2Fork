/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    
            if (window.localStorage) {
                
                var login = (localStorage.getItem("login"));
                var loginParsed = JSON.parse(login);
                // var username = loginParsed.username;
                var username=getCookie("farm2fork_devweb2014.cis.strath.ac.uk");
                var farmData = (localStorage.getItem("lastFarmScanned"));
                var farmDataParsed = JSON.parse(farmData);
                var id = farmDataParsed.id;
            }
            jQuery.ajax({
            type: "POST",
            url: "php/checkFavourited.php", //Where to make Ajax calls
            dataType:"text", // The type of data that expected back from the server.
            data: {farmid: id, username: username},
            success: function(data)          //on recieve of reply
            {
               console.log(data);
               if (data==="found"){
               document.getElementById('farmFavouriteIcon').src = "images/footer/Icons/favIcon.png";
               console.log("... farm is favourited");
           }
           else{
               console.log("... farm is not favourited");
           }
            }
            });

});
