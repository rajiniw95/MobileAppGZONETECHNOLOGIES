<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//agent's username assigned to variable userName
$userName = $_GET['username'];

//Select Data from the agent table in the GZone database
$query = sprintf("select * from agent where user_name = '%s'", $userName);

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