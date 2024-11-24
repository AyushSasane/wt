<?php
session_start();
include('db.php');

if (!isset($_SESSION['admin_id'])) {
    header('Location: login_admin.php');
    exit();
}

$stmt = $conn->prepare("SELECT complaints.id, students.username, complaints.complaint_text, complaints.complaint_date 
                        FROM complaints 
                        JOIN students ON complaints.student_id = students.id");
$stmt->execute();
$complaints = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
</head>
<body>
    <h2>Admin Dashboard</h2>
    <h3>All Complaints</h3>
    <table border="1">
        <tr>
            <th>Complaint ID</th>
            <th>Student Username</th>
            <th>Complaint</th>
            <th>Date Submitted</th>
        </tr>
        <?php foreach ($complaints as $complaint) { ?>
        <tr>
            <td><?php echo $complaint['id']; ?></td>
            <td><?php echo $complaint['username']; ?></td>
            <td><?php echo $complaint['complaint_text']; ?></td>
            <td><?php echo $complaint['complaint_date']; ?></td>
        </tr>
        <?php } ?>
    </table>
    <br><br>
    <a href="login_admin.php">Logout</a>
</body>
</html>
