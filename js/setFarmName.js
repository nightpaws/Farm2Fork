/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
console.log("set farm name");

var farmData = (localStorage.getItem("lastFarmScanned"));
        obj = JSON.parse(farmData);
        console.log(obj);
        document.getElementById('farmName').innerHTML = obj.name;
 };