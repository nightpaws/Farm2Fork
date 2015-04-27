<?php

//database connection info
$configs = include('../config/config.php');

//variables
$uname   = $_POST['uname'];
$email   = $_POST['email'];
$passwd  = $_POST['passwd'];
$isAdmin = 0;

$passwordHash = sha1($passwd);


//connection to the database
$dbhandle = mysqli_connect($configs["host"], $configs["username"], $configs["password"], $configs["username"]) or die("Unable to connect to MySQL");


//execute the SQL query and return records

$dupcheck = mysqli_query($dbhandle, "SELECT * FROM Users WHERE username = '$uname'");


$row_cnt = mysqli_num_rows($dupcheck);

if ($row_cnt > 0) {
    die("A user is already registered by that username!");
    
} else {
    //success! User is new! Begin Processing...
    
    // Execute the query
    $sql = "INSERT INTO Users (username, password, email, isAdmin) VALUES ('$uname','$passwordHash','$email','0')";
    
    $result = mysqli_query($dbhandle, $sql, MYSQLI_USE_RESULT);
    
    if ($result === FALSE) {
        die("An unknown error has occurred"); // TODO: better error handling
    }
}

// close the connection
mysqli_close($dbhandle);
header("Location: ../login.html");
die();
?>