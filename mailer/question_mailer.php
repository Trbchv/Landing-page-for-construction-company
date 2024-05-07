
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

$name = $_POST['name'];
$phone = $_POST['tel'];
$question = $_POST['question'];
$mail->Subject = 'Вопрос';
$mail->Body    = "<b>Имя:</b> $name <br>
                    <b>Телефон:</b> $phone<br>
                    <b>Вопрос:</b> $question<br>
                    ";

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
