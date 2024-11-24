<?php
// string_transform.php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $inputString = $_POST['inputString'];

    // Task (a) Convert string to uppercase
    $uppercaseString = strtoupper($inputString);

    // Task (b) Convert string to lowercase
    $lowercaseString = strtolower($inputString);

    // Task (c) Make the first character uppercase
    $ucfirstString = ucfirst($inputString);

    // Task (d) Make the first character of each word uppercase
    $ucwordsString = ucwords($inputString);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String Transformation</title>
</head>
<body>

    <h1>String Transformation Tool</h1>
    <form method="post" action="">
        <label for="inputString">Enter a string:</label><br>
        <input type="text" id="inputString" name="inputString" value="<?php echo isset($inputString) ? htmlspecialchars($inputString) : ''; ?>"><br><br>
        <input type="submit" value="Transform">
    </form>

    <?php if ($_SERVER["REQUEST_METHOD"] == "POST"): ?>
        <h2>Transformed Strings:</h2>
        <p><strong>All Uppercase:</strong> <?php echo htmlspecialchars($uppercaseString); ?></p>
        <p><strong>All Lowercase:</strong> <?php echo htmlspecialchars($lowercaseString); ?></p>
        <p><strong>First Character Uppercase:</strong> <?php echo htmlspecialchars($ucfirstString); ?></p>
        <p><strong>First Character of Each Word Uppercase:</strong> <?php echo htmlspecialchars($ucwordsString); ?></p>
    <?php endif; ?>

</body>
</html>
