$(document).ready(function () {
    // Copy items from List 1 to List 2
    $('#copyBtn').click(function () {
        // Clone all list items from list1 to list2
        $('#list1 li').each(function () {
            // Clone the item and append to list2
            $('#list2').append($(this).clone());
        });
    });

    // Add a new element dynamically to List 1
    $('#addElement').click(function () {
        // Prompt user for new item name
        const newItem = prompt('Enter the name of the new item:');
        if (newItem) {
            // Create a new <li> element and append it to list1
            $('#list1').append('<li>' + newItem + '</li>');
        }
    });
});
