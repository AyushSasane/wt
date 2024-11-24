<?php 
include('db.php'); 
// Fetch all employee records 
$sql = "SELECT * FROM employees"; 
$result = $conn->query($sql); 
?> 
<!DOCTYPE html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial
scale=1.0"> 
<title>Employee List</title> 
</head> 
<body> 
<h2>Employee List</h2> 
<table border="1"> 
<tr> 
<th>ID</th> 
<th>Name</th> 
<th>Position</th> 
<th>Salary</th> 
</tr> 
<?php 
if ($result->num_rows > 0) { 
while ($row = $result->fetch_assoc()) { 
echo "<tr> 
<td>" . $row['id'] . "</td> 
<td>" . $row['name'] . "</td> 
<td>" . $row['position'] . "</td> 
<td>" . $row['salary'] . "</td> 
</tr>"; 
} 
} else { 
echo "<tr><td colspan='4'>No records found</td></tr>"; 
} 
?> 
</table> 
</body> 
</html>