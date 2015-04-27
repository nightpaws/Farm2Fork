<?php
//database connection info
$configs = include('../config/config.php');

//variables
$uname  = $_POST['username'];
$passwd = $_POST['password'];

$passwordHash = sha1($passwd);


//connection to the database
$dbhandle = mysqli_connect($configs["host"], $configs["username"], $configs["password"], $configs["username"]) or die("Unable to connect to MySQL");


// ----------------------------------------------------------------------------------------------------------------
//success! User is new! Begin Processing...

// Execute the query
$sql = mysqli_query($dbhandle, "SELECT * FROM Users WHERE username='$uname' AND password='$passwordHash'");

$row_cnt = mysqli_num_rows($sql);
if ($row_cnt == 1) {
    echo "login complete";
    $cookieName = 'farm2fork_devweb2014.cis.strath.ac.uk';
    setcookie($cookieName, $uname, time() + (86400 * 30), "/");
    echo $_COOKIE[$cookieName];
    mysqli_close($dbhandle);
    header("location:../index.html");
    
} else {
    mysqli_close($dbhandle);
    
?><script type="text/javascript">
    alert("Incorrect username and/or password!");
    history.back();
  </script><?php
    
}
// close the connection
// mysql_close($dbhandle);
die();
// ----------------------------------------------------------------------------------------------------------------
?>