<?php	
	$host = 'localhost:3301';
	$user = 'root';
	$pass = '';
	$db = 'GZoneMobile';
	
	$mysqli = mysqli_connect($host, $user, $pass, $db);
	if (mysqli_connect_errno()){
		die("Connection Error : ". mysqli_connect_error());
	}		
?>

