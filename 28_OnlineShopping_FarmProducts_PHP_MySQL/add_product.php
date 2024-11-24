<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'farmer') {
    die("You must be a farmer to add products.");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $user_id = $_SESSION['user_id'];

    $stmt = $pdo->prepare("INSERT INTO products (user_id, name, description, price, quantity) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$user_id, $name, $description, $price, $quantity]);

    echo "Product added successfully!";
}
?>

<form method="POST" action="">
    Product Name: <input type="text" name="name" required><br>
    Description: <textarea name="description" required></textarea><br>
    Price: <input type="number" step="0.01" name="price" required><br>
    Quantity: <input type="number" name="quantity" required><br>
    <input type="submit" value="Add Product">
</form>