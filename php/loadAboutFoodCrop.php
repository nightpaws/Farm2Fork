<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//<?php echo $msg_id;
/*TO-DO: move code to connect to the database into a separate file, mysql.inc and then
 *place the statement require('sql/mysql.inc.php'); in php files that need it */
$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";
$foodID = $_POST['foodid'];

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("hwb12179", $dbhandle) or die("Could not select examples");

$farm = mysql_query("SELECT * "
        . "FROM Dairy "
        . "WHERE produce_id = '$foodID' ");

$result = mysql_fetch_row($farm); //fetch result
echo json_encode($result);
die();



mysql_close($dbhandle);
?>