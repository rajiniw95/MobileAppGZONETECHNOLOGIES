<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');
$CusID = $_GET['username'];
//Select Data from the postadvertiesement table in the smartapp database

$query1 = sprintf("delete  from deliveries where Agent_Id='%s'", $CusID);


$query = sprintf("delete  from orders where Agent_Id='%s' AND status='delivered'", $CusID);
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$ban = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $ban[] = $row;
    }
}
$json_response = json_encode($ban);
echo $json_response;
?>