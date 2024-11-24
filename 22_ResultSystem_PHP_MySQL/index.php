<?php include 'connect.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VIT Semester Results</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>VIT Semester Results</h1>
        <form action="results.php" method="GET">
            <label for="roll_no">Enter Roll Number:</label>
            <input type="text" id="roll_no" name="roll_no" required>
            <button type="submit">View Results</button>
        </form>
    </div>
</body>
</html>
