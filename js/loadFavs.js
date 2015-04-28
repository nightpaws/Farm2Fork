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
                var username = getCookie("farm2fork_devweb2014.cis.strath.ac.uk");
            }
            jQuery.ajax({
            type: "POST",
            url: "php/loadAllFavourites.php", //Where to make Ajax calls
            dataType:"JSON", // The type of data that expected back from the server.
            data: {username: username},
            success: function(data)          //on recieve of reply
            {
                if (data.length === 0 ){
                 var node = document.createElement("LI");
                 var textnode = document.createTextNode("No favourites, favourited farms appear here");
                 node.appendChild(textnode);
                 document.getElementById("favourites").appendChild(node);
                     
            }
               for (var i = 0; i < data.length; i++) {
               var farm = {
                    name : data[i][1],
                    operations: data[i][6],
                    crops: data[i][7],
                    bio: data[i][9],
                    organic: data[i][8],
                    street: data[i][2],
                    town: data[i][3],
                    postcode: data[i][4],
                    phone: data[i][5],
                    id: data[i][0]
               };
               
               var node = document.createElement("LI");
               node.onclick = function() {
                   console.log("clicked");
                   localStorage.setItem("lastFarmScanned", JSON.stringify(farm));
                   window.location = "farmProfileFromFavourites.html";};
               arrowImage = document.createElement('img');
               arrowImage.src = 'images/footer/Icons/favIcon.png';
               node.appendChild(arrowImage);
               var textnode = document.createTextNode(data[i][1] + ", " + data[i][3]);
               node.appendChild(textnode);
               document.getElementById("favourites").appendChild(node);
           }
               
            }
            });

});
