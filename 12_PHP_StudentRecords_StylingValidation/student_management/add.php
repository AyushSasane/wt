<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    $stmt = $conn->prepare("INSERT INTO students (name, email, age) VALUES (:name, :email, :age)");
    $stmt->execute(['name' => $name, 'email' => $email, 'age' => $age]);

    header('Location: index.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Add Student</title>
</head>
<body>
    <h1>Add Student</h1>
    <form id="studentForm" method="POST" action="">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>

        <label for="age">Age</label>
        <input type="number" id="age" name="age" min="1" required>

        <button type="submit">Add Student</button>
    </form>
</body>
</html>
