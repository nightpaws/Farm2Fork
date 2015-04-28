<?php
//<?php echo $msg_id;
/*TO-DO: move code to connect to the database into a separate file, mysql.inc and then
 *place the statement require('sql/mysql.inc.php'); in php files that need it */
$username = "hwb12179";
$password = "gichstsu";
$hostname = "devweb2014.cis.strath.ac.uk";
$farm_id = $_POST['farmid'];

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db("hwb12179", $dbhandle) or die("Could not select examples");

$result = mysql_query("SELECT * "
        . "FROM Dairy "
        . "WHERE Farmfarm_id IN (SELECT farm_id FROM Farm WHERE farm_id = '$farm_id' ) ");

if (false === $result) {
    echo mysql_error();
}


$jsonData = array();
while ($array = mysql_fetch_row($result)) {
    $jsonData[] = $array;
}
echo json_encode($jsonData);

mysql_close($dbhandle);
?>
