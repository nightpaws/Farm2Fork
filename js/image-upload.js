$(function() {
    qrcode.callback = showData;

    $('#uploadImgBtn').click(function() {
        var mpImg = new MegaPixImage($('#imageFile')[0].files[0]);
        var resImg = document.getElementById('qrcode');
        mpImg.render(resImg, { maxWidth: 250, maxHeight: 250, quality: 0.92 });

        //Wait half a second for image source to propagate
        setTimeout(function() {
            $.ajax({
                type: 'POST',
                url: 'ajax/upload-image.php',
                data: { image: resImg.src},
                // or data: plaindata, // If 'plaindata' is an object.
                dataType: 'json',
                success: function(data) {
                    if (data.success) {
                        console.log("Success! Image uploaded");
                        $("#decodeBtn").prop("disabled", false); //Allow decoding
                    }
                    else {
                        console.error("Error: Image could not be uploaded");
                  }
                },
                error: function(data) {
                  console.error("AJAX Error");
                }
            });
        }, 500);
    });

  $("#decodeBtn").click(function() {
    qrcode.decode($("#qrcode").attr("src"));
  });
});

function showData(data) {
    $.ajax({
                type: 'POST',
                url: 'ajax/farm2fork.php',
                data: { 'qrcodeData' : data},
                // or data: plaindata, // If 'plaindata' is an object.
                dataType: 'text',
                success: function(data) {
                    if (data.success === 1) {
                        console.log("Success! QRCode uploaded and decoded.");
                    }
                    else {
                        console.error("Error: Couldn't fetch required information.");
                  }
                },
                error: function(data) {
                  console.error("AJAX Error");
                }
    });
}