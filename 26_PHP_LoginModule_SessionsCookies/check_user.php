<?php
session_start();

// Check if session is set
if (isset($_SESSION['username'])) {
    echo "Welcome, " . $_SESSION['username'];
} elseif (isset($_COOKIE['username'])) {
    echo "Welcome, " . $_COOKIE['username'] . " (remembered by cookie)";
} else {
    echo "Please login first. <a href='login.php'>Login here</a>";
}
?>
