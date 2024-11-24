<?php
session_start();

// Database connection settings
$host = 'localhost';
$db = 'user_session_management4';
$user = 'root';
$pass = 'root';

// Create a PDO connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database: " . $e->getMessage());
}

// Set session timeout to 5 minutes
$timeout = 5 * 60; // 5 minutes in seconds
$current_time = time();

// Get the user ID (you can replace this with the actual logic to get the logged-in user's ID)
$user_id = 1; // Example user ID

// Check the number of concurrent sessions for the user
$stmt = $pdo->prepare("SELECT COUNT(*) FROM sessions WHERE user_id = :user_id");
$stmt->execute(['user_id' => $user_id]);
$concurrent_sessions = $stmt->fetchColumn();

// If there are already 3 sessions, terminate the oldest one if it's inactive for more than 5 minutes
if ($concurrent_sessions >= 3) {
    $stmt = $pdo->prepare("SELECT session_id, UNIX_TIMESTAMP(last_activity) AS last_activity FROM sessions WHERE user_id = :user_id ORDER BY last_activity ASC LIMIT 1");
    $stmt->execute(['user_id' => $user_id]);
    $oldest_session = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($oldest_session) {
        // If the oldest session has expired, delete it
        if (($current_time - $oldest_session['last_activity']) > $timeout) {
            $stmt = $pdo->prepare("DELETE FROM sessions WHERE session_id = :session_id");
            $stmt->execute(['session_id' => $oldest_session['session_id']]);
        }
    }
}

// Check for session expiration (last activity was more than 5 minutes ago)
if (isset($_SESSION['user_id']) && isset($_SESSION['last_activity'])) {
    if (($current_time - $_SESSION['last_activity']) > $timeout) {
        // Session has expired
        session_unset();
        session_destroy();
        echo "Session has expired. Please log in again.";
        exit();
    }
}

// Update last activity timestamp in session
$_SESSION['last_activity'] = $current_time;

// Now, handle session creation or renewal
$session_id = session_id();

// Insert a new session record in the database
$stmt = $pdo->prepare("INSERT INTO sessions (user_id, session_id) VALUES (:user_id, :session_id) ON DUPLICATE KEY UPDATE last_activity = CURRENT_TIMESTAMP");
$stmt->execute(['user_id' => $user_id, 'session_id' => $session_id]);

echo "Session is active and has been updated.";
?>
