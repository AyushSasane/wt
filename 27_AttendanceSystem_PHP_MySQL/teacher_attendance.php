<?php
// Connect to the database
$host = 'localhost';
$db = 'attendance_system';
$user = 'root'; 
$pass = 'root'; 

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch students from the database
$sql = "SELECT id, name, roll_no FROM students";
$result = $conn->query($sql);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST['date'];
    
    foreach ($_POST['attendance'] as $student_id => $status) {
        $status = ($status == 'on') ? 'Present' : 'Absent';
        $sql = "INSERT INTO attendance (student_id, date, status) VALUES ('$student_id', '$date', '$status')";
        $conn->query($sql);
    }
    echo "Attendance marked successfully!";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Teacher Attendance</title>
</head>
<body>
    <h2>Take Attendance</h2>
    <form method="POST" action="">
        Date: <input type="date" name="date" required><br><br>

        <h3>Mark Attendance</h3>
        <?php while ($row = $result->fetch_assoc()) { ?>
            <input type="checkbox" name="attendance[<?php echo $row['id']; ?>]" value="on">
            <?php echo $row['name'] . " (Roll No: " . $row['roll_no'] . ")"; ?><br><br>
        <?php } ?>

        <input type="submit" value="Submit Attendance">
    </form>
</body>
</html>
