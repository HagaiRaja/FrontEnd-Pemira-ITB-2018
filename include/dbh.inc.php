<?php

$servername = "localhost";
$port = "3306";
$usernamedb = "root";
$passworddb = "";
$dbname = "pemira";


$conn = mysqli_connect($servername, $usernamedb, $passworddb, $dbname, $port);

if ($conn -> connect_error) {
    $resp->success = false;
    $resp->error_message = $connection -> connect_error;

    header("Location: ../index.php?login=connection-error");;
    exit();
}