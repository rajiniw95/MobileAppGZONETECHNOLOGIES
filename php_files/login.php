<?php
header('Access-Control-Allow-Origin:*');
$con= mysqli_connect("localhost","root","");
$db = mysqli_select_db("GZoneMobile",$con);
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

