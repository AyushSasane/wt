6. Develop a currency converter application using PHP that allows users to input an amount dollar and convert it to rupees. This problem, you can use a hard-coded exchange rate. 

Requirements
Before you start, ensure you have the following:
•	A local development server (e.g., XAMPP, WAMP, MAMP) or a web hosting environment that supports PHP.
•	A web browser to view the application.
Steps to Create the Currency Converter
Step 1: Set Up Your Project
1.	Create a Folder for Your Project
o	Inside your server's root directory (e.g., htdocs for XAMPP or www for WAMP), create a folder named currency-converter.
2.	Create the PHP File
o	Inside the currency-converter folder, create a file named index.php.
Step 2: Write the PHP Code
Below is the complete code for the currency converter application, which uses a hardcoded exchange rate.


Code: index.php

<?php
// Step 1: Define the exchange rate (hard-coded)
$exchange_rate = 83.00;  // 1 USD = 83 INR

// Step 2: Initialize variables
$usd_amount = 0;
$converted_amount = 0;
$error_message = "";

// Step 3: Check if the form is submitted
if (isset($_POST['submit'])) {
    // Step 4: Get the input value from the user
    $usd_amount = $_POST['usd_amount'];

    // Step 5: Validate the input
    if (!is_numeric($usd_amount) || $usd_amount <= 0) {
        // If the entered value is not a valid number or is less than or equal to zero
        $error_message = "Please enter a valid positive number.";
    } else {
        // Step 6: Convert USD to INR using the exchange rate
        $converted_amount = $usd_amount * $exchange_rate;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter - USD to INR</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            padding: 20px;
        }
        h1 {
            color: #333;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        input[type="number"], input[type="submit"] {
            padding: 10px;
            width: 100%;
            margin: 10px 0;
            font-size: 16px;
        }
        .error {
            color: red;
        }
        .result {
            font-size: 18px;
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Currency Converter: USD to INR</h1>

    <!-- Step 7: Display any error messages if present -->
    <?php if ($error_message): ?>
        <p class="error"><?php echo $error_message; ?></p>
    <?php endif; ?>

    <!-- Step 8: Form for user input -->
    <form method="POST" action="">
        <label for="usd_amount">Enter Amount in USD:</label>
        <input type="number" name="usd_amount" id="usd_amount" placeholder="Enter amount in USD" required value="<?php echo $usd_amount; ?>">

        <input type="submit" name="submit" value="Convert">
    </form>

    <!-- Step 9: Display the result if conversion happens -->
    <?php if ($converted_amount > 0): ?>
        <div class="result">
            <p><?php echo number_format($usd_amount, 2); ?> USD = ₹<?php echo number_format($converted_amount, 2); ?> INR</p>
        </div>
    <?php endif; ?>
</div>

</body>
</html>


Step 4: Testing the Application
1.	Place the File:
o	Save the index.php file in your project folder (currency-converter).
2.	Run the Application:
o	If you're using XAMPP, WAMP, or MAMP, start the server and open a browser.
o	Visit http://localhost/currency-converter/index.php.
3.	Test the Functionality:
o	Enter a dollar amount (e.g., 10) and click Convert.
o	The equivalent INR amount (e.g., ₹830) will be displayed.

