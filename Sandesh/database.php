<?php
$hostName = "localhost:3306";
$userName = "root";
$password = "1234567890";
$databaseName = "cybergigsdatabase";
 $conn = new mysqli($hostName, $userName, $password, $databaseName);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>