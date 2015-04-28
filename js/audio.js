/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function audio(){
  

  var back = document.getElementById('audio');
  var playClickClass = document.getElementsByClassName('back');


  onClick = function() {
      back.play();  
      console.log("clicked");   
  };
 
  for(var i=0;i<playClickClass.length;i++){
        playClickClass[i].addEventListener('click', onClick, false);
   }
};

