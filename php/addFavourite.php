<?php

/*TO-DO: move code to connect to the database into a separate file, mysql.inc and then
 *place the statement require('sql/mysql.inc.php'); in php files that need it */
$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";

$farmid = $_POST['farmid'];
$user_name = $_POST['username'];

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("hwb12179", $dbhandle) or die("Could not select examples");

//MySQLi query
$sql = "INSERT INTO Favourite(Usersusername, Farmfarm_id) VALUES ('$user_name', '$farmid')";
    // Execute the query
    if (!mysql_query($sql)) {
        die(mysql_error());
    }
    //close the connection
mysql_close($dbhandle);
?>