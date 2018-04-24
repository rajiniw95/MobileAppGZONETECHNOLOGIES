<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//Asign Data to the Variables
$customer_id    = $_GET['customer_id'];
$agent_id       = $_GET['agent_id'];
$comments      = $_GET['comments'];
$customer_name      = $_GET['customer_name'];
$telno      = $_GET['telno'];
$sub_date      = $_GET['sub_date'];
$qty      = $_GET['qty'];
$product_id     = $_GET['product_id'];

//pass 'submitted' as status by default
	$query = sprintf(
		"INSERT INTO warranty_claim_request 
		(customer_id,
		agent_id,
		status, 
		comments,
		customer_name,
		customer_telno,
		sub_date,
		qty,
		product_id) 
		VALUES 
		('%s','%s','submitted','%s','%s','%s','%s','%s','%s')",
		$customer_id,
		$agent_id,
		$comments,
		$customer_name,
		$telno,
		$sub_date,
		$qty,
		$product_id);

	echo $query;
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
	
 $json_response = json_encode($result);

?>