<?php
session_start();
include('db.php');

if (!isset($_SESSION['student_id'])) {
    header('Location: login_student.php');
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = $_SESSION['student_id'];
    $complaint_text = $_POST['complaint_text'];

    $stmt = $conn->prepare("INSERT INTO complaints (student_id, complaint_text) VALUES (:student_id, :complaint_text)");
    $stmt->execute(['student_id' => $student_id, 'complaint_text' => $complaint_text]);

    echo "<p>Complaint submitted successfully!</p>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Submit Complaint</title>
</head>
<body>
    <h2>Submit Complaint</h2>
    <form method="POST">
        <label>Complaint:</label><br>
        <textarea name="complaint_text" rows="4" cols="50" required></textarea><br><br>
        <button type="submit">Submit Complaint</button><br><br>
    </form>
    <a href="login_student.php">Logout</a>
</body>
</html>
