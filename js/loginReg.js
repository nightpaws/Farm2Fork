function showRegister() {
    console.log("Show Register - clicked!");
    // $('input').val('');
    $('#registerPg').slideDown();
    $('#loginPg').slideUp();

};

function hideRegister() {
    console.log("Hide Register - clicked!");
    // $('input').val('');
    $('#loginPg').slideDown();
    $('#registerPg').slideUp();

};

function confirmRegister() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("passwd").value;
    var email = document.getElementById("email").value;
    console.log("Confirm Register - clicked!");
    console.log("username is: " + username);
    console.log("password is: " + password);
    console.log("email is: " + email);
    var tf = validateRegForm();
    console.log("Registration JS Done!");
    if (tf == true) {
        return true;
    } else {
        return false;
    }
};

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Validate Login - clicked!");
    console.log("username is: " + username);
    console.log("password is: " + password);
    var tf = validateLoginForm();
    console.log("Login JS Done!");
    if (tf == true) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {
    console.log("Document ready!");
    $("#registerBtn").click(showRegister);
    $("#cancelBtn").click(hideRegister);
    $("#confirmRegBtn").click(confirmRegister);
    $("#loginBtn").click(validateLogin);
});


function validateLoginForm() {
    // Username Validation
    var x = document.getElementById("username").value;
    if (x == null || x == "") {
        alert("Username field cannot be left blank");
        return false;
    } else if (x.length > 59) {
        alert("Your username is too long, it needs to be less than 60 characters in length")
        return false;
    }
    // Password Validation

    var x = document.getElementById("password").value;
    if (x == null || x == "") {
        alert("Password field cannot be left blank");
        return false;
    } else if (x.length > 127) {
        alert("Your password is too long, it needs to be less than 128 characters in length")
        return false;
    }
    return true;

};

function validateRegForm() {
    // Username Validation
    var x = document.getElementById("uname").value;
    if (x == null || x == "") {
        alert("Username field cannot be left blank");
        return false;
    } else if (x.length > 59) {
        alert("Your username is too long, it needs to be less than 60 characters in length")
        return false;
    }
    // Email validation
    var x = document.getElementById("email").value;
    var emailStructure = /\S+@\S+\.\S+/; //this is the very basic structure an email address should follow

    if (!(emailStructure.test(x))) {
        alert("That doesn't look like a valid email address, it should look like:\nYouremail@example.com");
        return false;
    }
    // Password Validation
    var x = document.getElementById("passwd").value;
    if (x == null || x == "") {
        alert("Password field cannot be left blank");
        return false;
    } else if (x.length > 127) {
        alert("Your password is too long, it needs to be less than 128 characters in length")
        return false;
    }
    return true;

};