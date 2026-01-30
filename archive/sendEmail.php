<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$message = $message . "\r\n\r\n" . $name . "\r\n" . $email;
$message = wordwrap($message, 70, "\r\n");

// Send
mail('support@sumhold.com', $subject, $message, "From: ".$email);
?>