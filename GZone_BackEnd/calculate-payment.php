
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//select total sum for deliveries made by the agent, status needs to be pending and cash on delivery must be true 
$query = "SELECT SUM(`total_amount`) FROM orders WHERE `Agent_Id`="1" AND `cash_on_delivery`="1" AND `status`="pending";”

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


