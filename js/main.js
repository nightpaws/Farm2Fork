$(document).ready(function(){
	$('#reader').html5_qrcode(function(qrcodeData){
		$.ajax({
            type: 'POST',
            url:  'ajax/farm2fork.php',
            data: {'qrcodeData' : qrcodeData},
            // or data: plaindata, // If 'plaindata' is an object.
            dataType: 'text',
            success: function(data) {
                if (data.success === 1) {
                    console.log("Success! Farm2Fork decoded");
                }
                else {
                    console.error("Error: Invalid QR information.");
                }
            },
            error: function(data) {
                console.error("Error reading QR Code.");
            } 
        });
    },
    function(error){
        $('#read_error').html(error);
    }, function(videoError){
        $('#vid_error').html(videoError);
    }
    );
});