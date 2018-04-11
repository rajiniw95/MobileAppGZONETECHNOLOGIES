<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//set variable for username
$CusID = $_GET['username'];

//$query1 = sprintf("delete  from deliveries where Agent_Id='%s'", $CusID);

//delete from deliveries, the order the agent marked as delivered
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