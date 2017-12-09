<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');

//Asighn Data to the Variables
$year	   = $_GET['year'];
$month     = $_GET['month'];
$date      = $_GET['date'];


	//Insert Data to the record-deposit table in the GzoneApp Database
	$query = sprintf("INSERT INTO `record-deposit`(year,month,date)  VALUES ('%s','%s','%s')", $year, $month, $date);
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
	
 $json_response = json_encode($result);
 echo $json_response;
?>