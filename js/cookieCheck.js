//Citation: http://www.w3schools.com/js/js_cookies.asp
//Used to assist with obtaining cookie data on the fly
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

$( document ).ready(function() {
    var cookiename=getCookie("farm2fork_devweb2014.cis.strath.ac.uk");
    if (cookiename == "") {
      window.location.replace("./login.html");
    }
});