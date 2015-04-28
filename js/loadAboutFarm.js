/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * A function to load the information related to a specific farm into the 'About Farm' profile.
 */
window.onload = function updateAboutFarm(){
    if (window.localStorage) {
        var farmData = (localStorage.getItem("lastFarmScanned"));
        obj = JSON.parse(farmData);
        document.getElementById('aboutFarmName').innerHTML = obj.name;
        document.getElementById('typesOfOperation').innerHTML = obj.operations;
        document.getElementById('cropsGrown').innerHTML = obj.crops;
        document.getElementById('bio').innerHTML = obj.bio;
        document.getElementById('street').innerHTML = obj.street;
        document.getElementById('town').innerHTML = obj.town;
        document.getElementById('postcode').innerHTML = obj.postcode;
        document.getElementById('telephone').innerHTML = obj.phone;
        document.getElementById('organic').innerHTML = obj.organic;
        var farmImage = document.getElementById('farmImage');

        farmImage.src = "images/farmProfileImages/aboutFarmImages/"+obj.id+".png";
    }
};
