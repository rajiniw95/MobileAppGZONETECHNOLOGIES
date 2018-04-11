<?php 

	require_once('phpmailer/class.phpmailer.php');
	
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