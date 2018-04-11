<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//set variables for agent_Id and date
$orderID = $_GET['agent_Id'];
$date = $_GET['date'];

//total amount (sum) of orders to be delivered by the agent in the month
$query = sprintf("select SUM(`total_amount`) as sum from orders where Agent_Id='%s' AND month='%s'", $orderID, $date);

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