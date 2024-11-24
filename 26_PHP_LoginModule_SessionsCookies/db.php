<?php
$host = 'localhost';
$dbname = 'user_login_system';
$username = 'root';  // Replace with your database username
$password = 'root';  // Replace with your database password

// Create connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
