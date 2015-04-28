<?php

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

$farm = mysql_query("SELECT Farm.farmName, Farm.typeOfOperation, Farm.cropsGrown, Farm.description, Farm.organic, Farm.street, Farm.town, Farm.postcode, Farm.telephone, Farm.farm_id  "
        . "FROM Animal, Farm, Dairy "
        . "WHERE (Animal.animal_id='$foodID' AND Animal.Farmfarm_id = Farm.farm_id) "
        . "OR (Dairy.produce_id='$foodID' AND Dairy.Farmfarm_id = Farm.farm_id) ");

$result = mysql_fetch_row($farm); //fetch result
echo json_encode($result);
die();



mysql_close($dbhandle);
?>