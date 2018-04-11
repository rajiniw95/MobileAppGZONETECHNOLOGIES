<?php 
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
	include('../Connecting_DB.php');
	require_once('phpmailer/class.phpmailer.php');
	$agentId = $_GET['agentId'];
	$query = sprintf("SELECT * from `record-deposit`  where Agent_Id='%s' ",$agentId);
	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
	$result = $mysqli->affected_rows;
	
	$json_response = json_encode($result);
	echo $json_response;
	
	$mail = new PHPMailer();
    $mail->CharSet =  "utf-8";
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Username = "shoppinggzone@gmail.com";
    $mail->Password = "1qaz2wsx@";
	$mail->SMTPSecure = "ssl";  
    $mail->Host = "smtp.gmail.com";
    $mail->Port = "465";
    $mail->SMTPDebug  = 2;
    $mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
    );
    $mail->setFrom('shoppinggzone@gmail.com', 'Gzone Admin');
    $mail->AddAddress('senuraa@msn.com', 'Senura Seneviratne');
 
    $mail->Subject  =  'using PHPMailer';
    $mail->IsHTML(true);
    $mail->Body    = 'Hi there ,
	                  <br />
					  this mail was sent using PHPMailer...
					  <br />
					  cheers... :)';
		
	if($mail->Send())
	{
		echo "Message was Successfully Send :)";
	}
	else
	{
		echo "Mail Error - >".$mail->ErrorInfo;
	}
		
?>