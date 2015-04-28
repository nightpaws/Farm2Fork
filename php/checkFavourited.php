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
$sql = "SELECT * "
        . "FROM Favourite "
        . "WHERE Favourite.Usersusername='$user_name' "
        . "AND Favourite.Farmfarm_id='$farmid' ";

$result = mysql_query($sql);
if (mysql_num_rows($result) >= 1) {
    echo("found");
}
else{
    echo("notFound");
}

    //close the connection
mysql_close($dbhandle);
?>