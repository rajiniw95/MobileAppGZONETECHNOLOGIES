<?php 

	require_once('phpmailer/class.phpmailer.php');

    $agent_email = $_GET['agent_email'];
    $customer_name = $_GET['customer_name'];
	
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
    $mail->AddAddress($agent_email);
 
    $mail->Subject  =  'Warranty Claim Request Made';
    $mail->IsHTML(true);
    $mail->Body    = 'Hi there ,
	                  <br />
					  Please note that a warranty claim request has been made by you, on behalf of {$customer_name}. Please reply with photos of the damaged item, so that we could further investigate the warranty claim and take the necessary action. 
					  <br />
					  We thank you greatly for being part of GZone Technologies and assisting us provide customer satisfation. 
                      <br />
                      Cheers!';
		
	if($mail->Send())
	{
		echo "Message was Successfully Send :)";
	}
	else
	{
		echo "Mail Error - >".$mail->ErrorInfo;
	}
		
?>