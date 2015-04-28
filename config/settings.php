<?php
 $cookie_name = "farm2fork_devweb2014.cis.strath.ac.uk";
 	//expire the current cookie: set the expiration date to one hour ago
setcookie ("$cookie_name", "", time() - 3600);
unset($_COOKIE["$cookie_name"]);
setcookie("$cookie_name", "", time() - 3600,"/");
header("location:../login.html");
?>