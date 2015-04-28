<?php

$marketID = $_REQUEST["f"];

$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";

// connection to database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to server");

// select a database to work with
$selected = mysql_select_db($username, $dbhandle) or die ("Unable to connect to database");

$sql = "SELECT marketName, street, town, postcode, telephone FROM Market WHERE market_id = '$marketID' ";
$result = mysql_query($sql);

if(!$result){
    die('Invalid query: ' .mysql_error());
}

$rows = array();
while($r = mysql_fetch_array($result, MYSQL_NUM)) {
    $rows[] = $r;
}

header('Content-Type: application/json');
echo json_encode($rows);

mysql_close($dbhandle);


?>
