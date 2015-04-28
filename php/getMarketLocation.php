<?php
$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";
$marketId = $_POST['marketId'];

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("hwb12179", $dbhandle) or die("Could not select examples");


$result = mysql_query("SELECT * "
        . "FROM Market  "
        . "WHERE market_id = '$marketId' ");

if (false === $result) {
    echo mysql_error();
}
// Encode results in JSON to return to the AJAX call
$jsonData = array();
while ($array = mysql_fetch_row($result)) {
    $jsonData[] = $array;
}
echo json_encode($jsonData);


mysql_close($dbhandle);
?>