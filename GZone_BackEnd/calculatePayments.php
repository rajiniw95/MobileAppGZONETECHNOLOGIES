<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');

$ID = $_GET['agentId'];

$query = sprintf("select * from orders where agent_ID='%s 'AND cash_on_delivery='1' AND status='pending' ", $ID);
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$card = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $card[] = $row;
    }
}
$json_response = json_encode($card);
echo $json_response;
?>