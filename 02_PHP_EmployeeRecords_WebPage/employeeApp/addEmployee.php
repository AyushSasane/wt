<?php 
include('db.php'); 
if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
// Collect form data 
$name = $_POST['name']; 
$position = $_POST['position']; 
$salary = $_POST['salary']; 
// Prepare SQL query to insert data into the table 
$sql = "INSERT INTO employees (name, position, salary)  
VALUES ('$name', '$position', '$salary')"; 
if ($conn->query($sql) === TRUE) { 
echo "New record created successfully"; 
} else { 
echo "Error: " . $sql . "<br>" . $conn->error; 
} 
} 
?> 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial
scale=1.0"> 
<title>Add Employee</title> 
</head> 
<body> 
<h2>Add Employee</h2> 
<form method="POST" action="addEmployee.php"> 
<label for="name">Name:</label> 
<input type="text" id="name" name="name" required><br><br> 
<label for="position">Position:</label> 
<input type="text" id="position" name="position" 
required><br><br> 
<label for="salary">Salary:</label> 
<input type="number" id="salary" name="salary" 
required><br><br> 
<input type="submit" value="Add Employee"> 
</form> 
</body> 
</html>