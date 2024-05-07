
<?php
require("phpmailer/class.phpmailer.php");
require("phpmailer/class.smtp.php");

require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();
$mail->Host = '******';

$mail->Username = '******';    //Логин
$mail->Password = '******';                   //Пароль
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = 'true';
$mail->Port = 465;

$mail->setFrom('******');
$mail->addAddress('******');

$mail->isHTML(true);

$phone = $_POST['tel'];

$mail->Subject = 'Расчет стоимости';
$mail->Body    = "<b>Телефон:</b> $phone<br>";

$mail->AltBody = '';


//Отправка сообщения

if(!$mail->send()) {
    return false;
}
else {
    $response = array(
        'status' => "true",
    );

    echo json_encode($response);
}

?>

