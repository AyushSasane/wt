<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill Calculator</title>
    <!-- Bootstrap CDN -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Electricity Bill Calculator</h3>
            <form id="billForm" method="POST">
                <div class="form-group">
                    <label for="units">Enter Units Consumed:</label>
                    <input type="number" class="form-control" id="units" name="units" required>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Calculate Bill</button>
            </form>
            <div id="result" class="mt-4"></div>
        </div>
    </div>
</div>

<!-- Bootstrap JS & jQuery for form submission -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>

<script>
    $(document).ready(function() {
        // Handle form submission
        $("#billForm").submit(function(e) {
            e.preventDefault(); // Prevent form submission
            let units = $("#units").val();
            if (units <= 0) {
                alert("Please enter a valid number of units.");
                return;
            }
            $.ajax({
                url: "calculate.php", // PHP file to calculate the bill
                type: "POST",
                data: { units: units },
                success: function(response) {
                    $("#result").html(response);
                }
            });
        });
    });
</script>

</body>
</html>
