<?php
include 'connect.php';

if (isset($_GET['roll_no'])) {
    $roll_no = $_GET['roll_no'];

    $studentQuery = $conn->prepare("SELECT * FROM students WHERE roll_no = ?");
    $studentQuery->bind_param("s", $roll_no);
    $studentQuery->execute();
    $studentResult = $studentQuery->get_result();

    if ($studentResult->num_rows > 0) {
        $student = $studentResult->fetch_assoc();
        $marksQuery = $conn->prepare("SELECT * FROM marks WHERE student_id = ?");
        $marksQuery->bind_param("i", $student['id']);
        $marksQuery->execute();
        $marksResult = $marksQuery->get_result();

        echo "<h1>Results for " . $student['name'] . " (Roll No: " . $student['roll_no'] . ")</h1>";
        echo "<table>";
        echo "<tr><th>Subject</th><th>MSE Marks</th><th>ESE Marks</th><th>Total Marks</th></tr>";

        while ($row = $marksResult->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row['subject'] . "</td>";
            echo "<td>" . $row['mse_marks'] . "</td>";
            echo "<td>" . $row['ese_marks'] . "</td>";
            echo "<td>" . $row['total_marks'] . "</td>";
            echo "</tr>";
        }

        echo "</table>";
    } else {
        echo "<p>No student found with Roll No: $roll_no</p>";
    }
} else {
    echo "<p>Invalid Request.</p>";
}
?>
