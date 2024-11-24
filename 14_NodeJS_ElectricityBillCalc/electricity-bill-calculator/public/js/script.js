$(document).ready(function () {
    $('#billForm').on('submit', function (e) {
        e.preventDefault();

        const units = $('#units').val();

        $.ajax({
            url: '/calculate',
            method: 'POST',
            data: { units },
            success: function (response) {
                $('#result').text(`Your Electricity Bill: ₹${response.bill}`);
            },
            error: function () {
                $('#result').text('Error calculating bill. Please try again.');
            }
        });
    });
});
