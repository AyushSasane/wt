$(document).ready(function() {
    let integerArray = [];
    let nameArray = [];

    // Integer array search and sort
    $('#searchSortIntegersBtn').click(function() {
        const inputString = $('#inputIntegerStringJquery').val();
        const searchValue = parseInt($('#searchIntegerJquery').val(), 10);

        // Parse the input string into an integer array
        integerArray = inputString.split(',').map(num => parseInt(num.trim(), 10));
        let resultMessage = '';

        // Sorting the array
        const sortedArray = [...integerArray].sort((a, b) => a - b);

        if (!isNaN(searchValue)) {
            const foundIndex = integerArray.indexOf(searchValue);
            resultMessage = foundIndex !== -1
                ? `Number ${searchValue} found at index ${foundIndex}.<br>`
                : `Number ${searchValue} not found.<br>`;
        }

        resultMessage += `Sorted Array: ${sortedArray.join(', ')}`;
        $('#integerResultJquery').html(resultMessage);
    });

    // Named entities array search and sort
    $('#searchSortNamesBtn').click(function() {
        const inputString = $('#inputNameStringJquery').val();
        const searchValue = $('#searchNameJquery').val().toLowerCase();

        // Parse the input string into an array of names
        nameArray = inputString.split(',').map(name => name.trim());
        let resultMessage = '';

        // Sorting the array alphabetically
        const sortedNames = [...nameArray].sort();

        if (searchValue) {
            const foundNames = nameArray.filter(name => name.toLowerCase().includes(searchValue));
            resultMessage = foundNames.length > 0
                ? `Found names: ${foundNames.join(', ')}.<br>`
                : `No names found matching "${searchValue}".<br>`;
        }

        resultMessage += `Sorted Names: ${sortedNames.join(', ')}`;
        $('#nameResultJquery').html(resultMessage);
    });
});
