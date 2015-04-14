/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function updateProducts(){
    var node = document.createElement("LI");
    node.onclick = function() { window.location = "http://www.google.com/"; };
    arrowImage = document.createElement('img');
    arrowImage.src = 'images/farmProfileImages/productsImages/arrowRightIcon.png';
    node.appendChild(arrowImage);
    var textnode = document.createTextNode("Javascript Dynamically Added Crop");
    node.appendChild(textnode);
    document.getElementById("crops").appendChild(node);
    
    var node = document.createElement("LI");
    node.onclick = function() { window.location = "http://www.google.com/"; };
    arrowImage = document.createElement('img');
    arrowImage.src = 'images/farmProfileImages/productsImages/arrowRightIcon.png';
    node.appendChild(arrowImage);
    var textnode = document.createTextNode("JS Dynamically Added Meat");
    node.appendChild(textnode);
    document.getElementById("meat").appendChild(node);
};

