<?php
header('Access-Control-Allow-Origin:*');

$con= mysqli_connect("localhost","root","");
$db = mysqli_select_db("GZoneMobile",$con);
$sql = ' select id from login where user_name= "'.$_GET['username'].'" ';
$result = mysql_query($sql,$con);
if($row=mysql_fetch_array($result))
{
 $AgentID=$row['id'];
echo $AgentID;

}
else{
echo "false";
}
?>