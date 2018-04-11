<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

include('Connecting_DB.php');

//initialize variables for agent_Id, total and date
$CusID = $_GET['agent_Id'];
$total = $_GET['total'];
$date = $_GET['date'];

//Select Data from the record-deposit table in the GZone database
//takes month into account. For that agent. 
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
echo($count); //echoes count

//If no previous records were added for that particular month for that particular agent, then we INSERT
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
}

//if previous reocrds exist for the agent in the current month we UPDATE
else{
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