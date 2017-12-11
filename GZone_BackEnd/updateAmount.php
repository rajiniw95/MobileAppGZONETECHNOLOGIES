<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
include('Connecting_DB.php');
$CusID = $_GET['agent_Id'];
$total = $_GET['total'];
$date = $_GET['date'];

//Select Data from the postadvertiesement table in the smartapp database
$query = sprintf("SELECT COUNT(*) AS `count` FROM `record-deposit` where Agent_Id='%s' AND month ='%s'",$CusID,$date);

//$query = sprintf("SELECT COUNT(*) AS "count" FROM `record-deposit` where `Agent_Id`=2 AND `month` =12");

$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$count = 0;
$ban = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $ban[] = $row;
		$count = $row[count];
		echo($count);
		
    }
}
echo($count);
if($count==0){
	echo("in");
	$query1 = sprintf("INSERT INTO `record-deposit`(Agent_Id,month,total_amount,date,year) VALUES ('%s','%s','%s',0,0)",$CusID,$date,$total);
	$result = $mysqli->query($query1) or die($mysqli->error . __LINE__);
	$ban = array();
	if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $ban[] = $row;
		
		
	}
	}
}else{
	echo("12");
	$query2 = sprintf("UPDATE `record-deposit` SET  total_amount = '%s'  where Agent_Id = '%s' AND month = '%s' ",$total,$CusID,$date);
	$result= $mysqli->query($query2) or die($mysqli->error . __LINE__);
    $ban = array();
		if ($result->num_rows > 0) {
			while ($row = $result->fetch_assoc()) {
			$ban[] = $row;
			echo("out");
	;
}
}
}

?>