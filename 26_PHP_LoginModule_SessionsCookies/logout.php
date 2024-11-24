<?php
session_start();

// Destroy session and cookies
session_destroy();
setcookie('username', '', time() - 3600, '/');  // Delete the cookie

echo "You have been logged out. <a href='login.php'>Login again</a>";
?>
