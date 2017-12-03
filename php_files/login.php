<?php
header('Access-Control-Allow-Origin:*');
include('Connecting_DB.php');

$sql = ' select * from login where user_name= "'.$_GET['username'].'" and password= "'.$_GET['password'].'" and request=1 ';
$result = $mysqli->query($sql);
if($row=mysqli_fetch_array($result))
{
 
	   $markers[] = array(
	  'id' => $row['id'],
      );
	  echo json_encode($markers);
}
else
{
echo "false";
}
?>
