<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $units = $_POST['units'];
    $billAmount = 0;

    if ($units <= 50) {
        $billAmount = $units * 3.50; // Rs. 3.50 per unit for first 50 units
    } elseif ($units <= 150) {
        $billAmount = (50 * 3.50) + (($units - 50) * 4.00); // Rs. 4.00 per unit for 51-150 units
    } elseif ($units <= 250) {
        $billAmount = (50 * 3.50) + (100 * 4.00) + (($units - 150) * 5.20); // Rs. 5.20 per unit for 151-250 units
    } else {
        $billAmount = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + (($units - 250) * 6.50); // Rs. 6.50 per unit for units above 250
    }

    // Return the bill amount
    echo "<h4 class='text-center'>Total Bill: Rs. " . number_format($billAmount, 2) . "</h4>";
}
?>
