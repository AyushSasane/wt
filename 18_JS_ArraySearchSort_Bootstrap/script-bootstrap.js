// Integer array search and sort
const integerArray = [12, 45, 7, 33, 19, 5, 28, 66, 99, 1];

function searchAndSortIntegers() {
    const searchValue = parseInt(document.getElementById('searchInteger').value, 10);
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
    document.getElementById('integerResult').innerHTML = resultMessage;
}

// Named entities array search and sort
const nameArray = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank'];

function searchAndSortNames() {
    const searchValue = document.getElementById('searchName').value.toLowerCase();
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
    document.getElementById('nameResult').innerHTML = resultMessage;
}
