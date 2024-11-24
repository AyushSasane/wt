<?php
session_start();
include 'db.php';

if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
    echo "Your cart is empty.";
    exit;
}

$total = 0;
foreach ($_SESSION['cart'] as $product_id => $quantity) {
    $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
    $stmt->execute([$product_id]);
    $product = $stmt->fetch();

    $subtotal = $product['price'] * $quantity;
    $total += $subtotal;

    echo "<h2>{$product['name']}</h2>";
    echo "<p>Quantity: $quantity</p>";
    echo "<p>Subtotal: \$$subtotal</p>";
}

echo "<h3>Total: \$$total</h3>";
?>