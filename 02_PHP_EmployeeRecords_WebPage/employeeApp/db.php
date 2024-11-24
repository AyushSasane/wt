<?php
$servername = "localhost";
$username = "root"; // or your MySQL username
$password = "root"; // MySQL password
$dbname = "employee_db"; // the database you created

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>