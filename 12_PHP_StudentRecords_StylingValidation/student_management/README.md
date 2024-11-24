# PHP Application for Managing Student Records

This project is a solution to **Question 12**:

> **12. Design and develop PHP application to add, delete, list student records use CSS for styling and JavaScript for validating form.**

## Features

1. **List Students**: Displays all student records in a table format.
2. **Add Student**: Provides a form to add new students with JavaScript validation for form inputs.
3. **Delete Student**: Allows the deletion of student records.
4. **Styling with CSS**: Enhances the UI for a better user experience.

## File Structure

- `students.sql`: SQL script to create the database and populate it with dummy data.
- `db.php`: Handles database connection.
- `index.php`: Lists all student records and provides the option to delete a record.
- `add.php`: Provides a form to add new students.
- `delete.php`: Handles deletion of student records.
- `style.css`: CSS file for styling the application.
- `script.js`: JavaScript file for form validation.

## Prerequisites

1. PHP installed on your machine.
2. MySQL or MariaDB for the database.
3. A web server like XAMPP, Apache or Nginx.

## Installation Steps

1. **Import the Database**:
   - Import the `students.sql` file into your MySQL database using PHPMyAdmin or the MySQL CLI.

2. **Set Up the Project**:
   - Place all the files in your web server directory (e.g., `htdocs` for XAMPP or `/var/www/html` for Apache).

3. **Configure Database Connection**:
   - Edit `db.php` to match your database credentials:
     ```php
     $host = 'localhost';
     $db = 'students_db';
     $user = 'root';
     $password = 'root';
     ```

4. **Run the Application**:
   - Open a browser and navigate to the `index.php` file:
     ```
     http://localhost/folder_name/index.php
     ```

## How to Use

1. **List Students**:
   - View all student records on the main page (`index.php`).
   
2. **Add Students**:
   - Click the **Add New Student** button to access the form for adding a new student.
   - Fill out the form and submit.

3. **Delete Students**:
   - Click the **Delete** button next to a student record to remove it.

## Screenshots (Optional)

_Add screenshots here if needed._

## Notes

- JavaScript is used for basic form validation to ensure all fields are filled before submission.
- CSS is used to make the interface user-friendly.
- This project is meant for learning purposes and may require additional security measures (e.g., input sanitization) for production use.
