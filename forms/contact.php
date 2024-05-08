
<?php
$to      = 'hugosoto@sprintxlatam.com';
$subject = 'Test Email';
$message = 'Hello! This is a test email.';
$headers = 'From: reivaxv40@gmail.com' . "\r\n" .
           'Reply-To: reivaxv40@gmail.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully";
} else {
    echo "Email sending failed";
}
?>