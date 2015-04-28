<?php

/*
 * PHP script is used to access database and return the address and id for all markets stored in the
 * database. Its used within populateMap.js ajax call so all the market markers can be placed onto google map.
 */

$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";

// Connect to the server
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to server");

// Select database to work with
$selected = mysql_select_db($username, $dbhandle) or die ("Unable to connect to database");

// SQL query for all markets
$sql = "SELECT marketName, street, town, postcode, market_id FROM Market";
$result = mysql_query($sql);

if(!$result){
    die('Invalid query: ' .mysql_error());
}

// Format SQL query result ready for json_encode
$rows = array();
while($r = mysql_fetch_array($result, MYSQL_NUM)) {
    $rows[] = $r;
}

// Define content type for HTTP protocol
header('Content-Type: application/json');
echo json_encode($rows);

// Close the connection to database
mysql_close($dbhandle);

?>