<?php

	$configs = include('../config/config.php');

	header('Content-Type: application/json');
	
	$content = "";
	$success = false;

	if (isset($_POST['qrcodeData'])){
		$tokens = explode(" ", $_POST['qrcodeData']);

		if (is_numeric($tokens[0])){
			if (is_numeric($tokens[1])){
				//connection to the database
				$dbhandle = mysqli_connect($configs["host"], $configs["username"], $configs["password"], $configs["username"]) or die("Unable to connect to MySQL");

				$sql = "SELECT * FROM Animal WHERE Animal.animal_id = '" . $tokens[0] . "' AND Animal.Farmfarm_id = '" . $tokens[1] . "'";
				$result = mysqli_query($dbhandle, $sql, MYSQLI_USE_RESULT);
				
				if($result === FALSE) { 
				    die(mysql_error()); // TODO: better error handling
				} else {
					echo $tokens[0] . ' ' . $tokens[1];
				}

				
				$success = true;		
				
				$content = $success ? 'Redirected to Farm2Fork website.' : 'Unable to access website.';
			}
		} else {
			$content = 'Error! Invalid request.';
		}
	}
	exit;
?>