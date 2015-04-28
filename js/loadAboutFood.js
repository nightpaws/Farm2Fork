/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function updateAboutFood(){
    if (window.localStorage) {
        var farmData = (localStorage.getItem("food"));
        obj = JSON.parse(farmData);
        console.log(obj);
        console.log("descriptionCategory1");
        document.getElementById('profileType').innerHTML = obj.profileType;
        document.getElementById('descriptionCategory1').innerHTML = obj.descriptionCategory1;
        document.getElementById('descriptionCategory1b').innerHTML = obj.descriptionCategory1b;
        document.getElementById('descriptionCategory2').innerHTML = obj.descriptionCategory2;
        document.getElementById('descriptionCategory2b').innerHTML = obj.descriptionCategory2b;
        document.getElementById('descriptionCategory3').innerHTML = obj.descriptionCategory3;
        document.getElementById('descriptionCategory3b').innerHTML = obj.descriptionCategory3b;
        document.getElementById('descriptionCategory4').innerHTML = obj.descriptionCategory4;
        document.getElementById('descriptionCategory4b').innerHTML = obj.descriptionCategory4b;
        document.getElementById('descriptionCategory5').innerHTML = obj.descriptionCategory5;
        document.getElementById('descriptionCategory5b').innerHTML = obj.descriptionCategory5b;
        document.getElementById('descriptionCategory6').innerHTML = obj.descriptionCategory6;
        document.getElementById('descriptionCategory6b').innerHTML = obj.descriptionCategory6b;
        var foodImage = document.getElementById('foodImage');
        foodImage.src = "images/farmProfileImages/aboutFoodImages/"+obj.id+".png";
    }
};