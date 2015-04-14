/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function cameraOption(){
                    var div = document.getElementById('newdiv');
                    while(div.firstChild){
                        div.removeChild(div.firstChild);
                    } 
                    var qrmeatImage = document.createElement("img");
                    qrmeatImage.src = "images/qrImages/qrmeat.jpg";
                    qrmeatImage.id = "qrmeat2";
                    qrmeatImage.className = "qrMeatPicture";
                    newdiv.appendChild(qrmeatImage);
                    
                }
function keyboardOption() {
                    
                var div = document.getElementById('newdiv');
                while(div.firstChild){
                    div.removeChild(div.firstChild);
                 }
                    
                var barcodeImage = document.createElement("img");
                barcodeImage.src = "images/qrImages/barcode.png";
                barcodeImage.id = "barcodeImage";

                var qrForm = document.createElement("form");
                qrForm.setAttribute('method',"post");
                qrForm.setAttribute('action',"submit.php");

                var qrCodeInput = document.createElement("input");
                qrCodeInput.type = "tel";
                qrCodeInput.name = "qrCodeUserInput";
                qrCodeInput.id = "qrCodeUserInput";
                qrCodeInput.placeholder = "QR Code";
                
                
                

                var submitButton = document.createElement("input");
                submitButton.type = "submit";
                submitButton.value = "Submit";

                qrForm.appendChild(qrCodeInput);
                qrForm.appendChild(submitButton);
                
                
 
                newdiv.appendChild(barcodeImage);
                newdiv.appendChild(qrForm);
                
    }
