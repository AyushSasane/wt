// Fetch students from the backend
fetch('/api/students')
  .then(response => response.json())
  .then(data => {
    const studentContainer = document.getElementById('student-container');

    // Clear loading message
    studentContainer.innerHTML = '';

    if (Array.isArray(data) && data.length === 0) {
      // If no students are found
      studentContainer.innerHTML = '<p>No students found.</p>';
    } else {
      // Display the list of students
      data.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.textContent = `ID: ${student.id}, Name: ${student.name}, Email: ${student.email}`;
        studentContainer.appendChild(studentDiv);
      });
    }
  })
  .catch(error => {
    console.error('Error fetching students:', error);
    document.getElementById('student-container').innerHTML = '<p>Error loading students.</p>';
  });
