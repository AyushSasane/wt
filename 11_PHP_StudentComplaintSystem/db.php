<?php
$servername = "localhost";
$username = "root";  // Change this if your MySQL username is different
$password = "root";      // Change this if you have a password
$dbname = "college_complaints2";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
