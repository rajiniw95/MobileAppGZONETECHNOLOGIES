<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//id, status, date assigned to variables
$orderID = $_GET['id'];
$status = $_GET['status'];


/* query to update 
status to $status, 
month to $month,
orderID to $orderID
*/
$query = sprintf("UPDATE orders SET status = '%s'WHERE orderID='%s'",$status,$orderID);

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