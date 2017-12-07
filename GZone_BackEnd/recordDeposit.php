<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');

//Asighn Data to the Variables
$amount         = $_GET['amount'];
$year		 = $_GET['year'];
$month     = $_GET['month'];

echo $amount;

	//Insert Data to the businesscard table in the smartapp Database
	$query = "INSERT INTO buissnescard(Amount,Year,Month)  VALUES ('$amount','$year','$month')";
	$result = $mysqli->query($query1) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
	
 $json_response = json_encode($result);
 echo $json_response;
?>