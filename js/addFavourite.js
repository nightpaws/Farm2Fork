/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var theId, theUsername;
$(document).ready(function() {
    $("#farmFavouriteIcon").click(function () {
        
                    
         if (window.localStorage) {
                var farmData = (localStorage.getItem("lastFarmScanned"));
                var farmDataParsed = JSON.parse(farmData);
                var id = farmDataParsed.id;
                theId = id;
                var login = (localStorage.getItem("login"));
                var loginParsed = JSON.parse(login);
                // var username = loginParsed.username;
                var username = getCookie("farm2fork_devweb2014.cis.strath.ac.uk");
                theUsername = username;
            }
            
            
        var c = document.getElementById('farmFavouriteIcon').src;
        if (c === "https://devweb2014.cis.strath.ac.uk/~rqb12155/317/Farm2Fork/images/footer/Icons/favIcon.png"){
            unfavourite();
            return;
        }
        else{
            favourite();
            return;
        }
    });

});


function favourite(){


            jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "php/addFavourite.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data: {farmid: theId, username: theUsername}, //Form variables
            success:function(response){
               console.log("success");
               console.log(response);
               document.getElementById('farmFavouriteIcon').src = "images/footer/Icons/favIcon.png";
            }
            });
}

function unfavourite(){
            jQuery.ajax({
            type: "POST", // HTTP method POST or GET
            url: "php/unfavourite.php", //Where to make Ajax calls
            dataType:"text", // Data type, HTML, json etc.
            data: {farmid: theId, username: theUsername}, //Form variables
            success:function(response){
               console.log("success");
               console.log(response);
               document.getElementById('farmFavouriteIcon').src = "images/indexImages/favourite.png";
            }
            });
}