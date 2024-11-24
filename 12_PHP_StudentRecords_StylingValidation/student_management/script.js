document.getElementById('studentForm').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;

    if (name === '' || email === '' || age === '') {
        alert('Please fill in all fields.');
        e.preventDefault();
    } else if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        e.preventDefault();
    }
});
