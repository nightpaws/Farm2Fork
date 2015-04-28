<?php

/*
 * PHP script is used to access database and return the address and id for all farms stored in the
 * database. Its used within populateMap.js ajax call so all the farm markers can be placed onto google map.
 */

$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";

// Connect to the server
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to server");

// Select a database to work with
$selected = mysql_select_db("hwb12179", $dbhandle) or die("Unable to access database");

// MYSQL request for all farms
$sql = "SELECT farmName, typeOfOperation, cropsGrown, description, organic, street, town, postcode, telephone, farm_id FROM Farm";
$result = mysql_query($sql);

if (!$result) {
    die('Invalid query: ' . mysql_error());
}

// Format result of sql query ready for json_encode
$rows = array();
while ($r = mysql_fetch_array($result, MYSQL_NUM)) {
    $rows[] = $r;
}

// Define content-type HTTP protocol
header('Content-Type: application/json');
echo json_encode($rows);

// Close connection to the database
mysql_close($dbhandle);

?>
