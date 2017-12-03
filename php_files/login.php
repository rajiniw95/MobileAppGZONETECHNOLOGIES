<?php
header('Access-Control-Allow-Origin:*');
include('Connecting_DB.php');

$sql = " select role from login where user_name= "'.$_GET['username'].'" ";
$result = mysql_query($sql,$con);
if($row=mysql_fetch_array($result,$con))
{
echo $row[0];
}
else{
echo "false";
}
?>

