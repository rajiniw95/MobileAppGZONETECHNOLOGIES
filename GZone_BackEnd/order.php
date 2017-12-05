<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');
//$con= mysql_connect("localhost","root","");
//$db = mysql_select_db("Hello",$con);
$ID = $_GET['id'];
$query = "select * from order where id=$ID";
$result = $link->query($query) or die($link->error . __LINE__);
$card = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $card[] = $row;
    }
}
$json_response = json_encode($card);
echo $json_response;
?>