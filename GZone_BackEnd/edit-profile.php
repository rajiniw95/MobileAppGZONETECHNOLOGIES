<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//Asign Data to the Variables
$agent_id    = $_GET['agentId'];
$fname    = $_GET['fname'];
$lname      = $_GET['lname'];
$address     = $_GET['address'];
$tel_no      = $_GET['tel_no'];


	//Insert Data to the record-deposit table in the GzoneApp Database
	$query = sprintf("UPDATE `agent` SET fname = '%s', lname = '%s', address = '%s',tel_no = '%s'  WHERE agentID='%s'",$fname,$lname,$address,$tel_no,$agent_id);
	echo $query;
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
	
 $json_response = json_encode($result);

?>