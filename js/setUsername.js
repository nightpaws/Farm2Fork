/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function setUser(){
if (window.localStorage) {
    
    var username = {
        username : 'nightpaws'
    };
    localStorage.setItem("login", JSON.stringify(username));          
    console.log("Username Stored in LocalStorage");
}
};

