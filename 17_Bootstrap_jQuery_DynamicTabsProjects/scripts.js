// scripts.js

$(document).ready(function () {
    // Function to handle the tab switching
    $('#myTab a').on('click', function (e) {
        e.preventDefault();

        // Get the ID of the clicked tab and update the active tab
        var target = $(this).attr('href');
        $('#myTab a').removeClass('active');
        $(this).addClass('active');

        // Switch the active tab content
        $('.tab-pane').removeClass('show active');
        $(target).addClass('show active');
    });
});
