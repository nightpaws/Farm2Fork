/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* AJAX function to calls the file File, loadFarmAboutPages.php to load in the relevant data regarding the Farm
 * into the AboutFood, AboutFarm and Products Pages
 * Script is placed on the FarmProfile page*/

var theFoodId, theMarketId;
$(document).ready(function() {
            //localStorage.clear();
            //console.log("loading qr information");
            //console.log(localStorage.getItem("theFoodId"));
            //console.log(localStorage.getItem("theMarketId"));
            /*Hard coded values for meantime, should determined by the QR code*/
            theFoodId = localStorage.getItem("theFoodId"); //10
            theMarketId = localStorage.getItem("theMarketId");;
            
            
            jQuery.ajax({
            type: "POST",
            url: "php/loadFarmAboutPages.php", //Where to make Ajax calls
            data: {foodid: theFoodId},
            dataType:"JSON", // The type of data that expected back from the server.
            success: function(data)          //on recieve of reply
            {
                console.log(data);
                var farm = {
                    name : data[0],
                    operations: data[1],
                    crops: data[2],
                    bio: data[3],
                    organic: data[4],
                    street: data[5],
                    town: data[6],
                    postcode: data[7],
                    phone: data[8],
                    id: data[9]
                };
                document.getElementById('farmName').innerHTML = farm.name;
                if (window.localStorage) {
                    localStorage.setItem("lastFarmScanned", JSON.stringify(farm));          
                    console.log("Farm Data Stored in LocalStorage");
                }
                setUsernameInLocalStorage();
                checkFavourited();
                setMarketLocationInformation();
            }
            
            });
            
            jQuery.ajax({
            type: "POST",
            url: "php/loadAboutFood.php", //Where to make Ajax calls
            data: {foodid: theFoodId},
            dataType:"JSON", // The type of data that expected back from the server.
            success: function(data)          //on recieve of reply
            {   
                if (data.length === 10){
                var food = {
                    id : data[0],
                    profileType : "Animal",
                    descriptionCategory1 : data[2],
                    descriptionCategory1b: data[7],
                    descriptionCategory2: "Breed: ",
                    descriptionCategory2b: data[3],
                    descriptionCategory3: "Grazing Area: ",
                    descriptionCategory3b: data[8],
                    descriptionCategory4: "Vaccinations: ",
                    descriptionCategory4b: data[5],
                    descriptionCategory5: "Hormones: :",
                    descriptionCategory5b: data[6],
                    descriptionCategory6: "Food Bio",
                    descriptionCategory6b: data[9]
                };
                if (window.localStorage) {
                    localStorage.setItem("food", JSON.stringify(food));          
                    console.log("Food Data Stored in LocalStorage");
                }
                
                }
                
            }
            });
            
            jQuery.ajax({
            type: "POST",
            url: "php/loadAboutFoodCrop.php", //Where to make Ajax calls
            data: {foodid: theFoodId},
            dataType:"JSON", // The type of data that expected back from the server.
            success: function(data)          //on recieve of reply
            {   
                if (data.length === 8){
                    console.log("ssadad" + data);
                var food = {
                    id : data[0],
                    profileType : "Crop",
                    descriptionCategory1 : "Crop",
                    descriptionCategory1b: data[7],
                    descriptionCategory2: "Harvesting Season: ",
                    descriptionCategory2b: data[2],
                    descriptionCategory3: "Irrigation: ",
                    descriptionCategory3b: data[3],
                    descriptionCategory4: "Storage: ",
                    descriptionCategory4b: data[4],
                    descriptionCategory5: "Acres Harvested: ",
                    descriptionCategory5b: data[5],
                    descriptionCategory6: "Yield (tonnes per hectare): ",
                    descriptionCategory6b: data[6]
                };
                if (window.localStorage) {
                    localStorage.setItem("food", JSON.stringify(food));          
                    console.log("Food Data Stored in LocalStorage");
                }
                
                }
                
            }
            });

});


function setUsernameInLocalStorage(){
if (window.localStorage) {
    
    var username = {
        username : 'nightpaws'
    };
    localStorage.setItem("login", JSON.stringify(username));          
    console.log("Username Stored in LocalStorage");
    }

}

function checkFavourited(){
                if (window.localStorage) {
                
                var login = (localStorage.getItem("login"));
                var loginParsed = JSON.parse(login);
                var username = loginParsed.username;
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
}

/*Function to store the market's id, name and location information to local storage for the purposes of later
 * calculating a route when the user taps on the 'Eco-Impact' button*/
function setMarketLocationInformation(){

     console.log(theMarketId); //Market id is given to us by QR code
     
            jQuery.ajax({
            type: "POST", // To pass market id to the php file
            url: "php/getMarketLocation.php", //Where to make Ajax calls
            dataType:"JSON", // Encodes the result of the query from the PHP file
            data: {marketId: theMarketId},
            success: function(data) 
            {
                // Compose a market object from the data we get back from the PHP file
                var market = {
                    id : data[0][0],
                    name : data[0][1],
                    street : data[0][2],
                    town : data[0][3],
                    postcode: data[0][4]                  
                };
                
                /*Fire the market object in local storage, can be taken from local storage when user has to 
                 * calculate route*/
                if (window.localStorage) {
                    localStorage.setItem("market", JSON.stringify(market));          
                    console.log("Market Data Stored in LocalStorage");
                }
            }
           });
            
            
     
}