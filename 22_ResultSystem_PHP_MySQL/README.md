# Question 22: Design and Develop a Responsive Website for Semester Results

**Question:**  
Design and develop a responsive website to prepare one semester result of VIT students using PHP and MySQL. Take any four subjects with MSE Marks (30%) and ESE Marks (70%).

---

## Project Overview

This project is a responsive website for managing and displaying the semester results of VIT students. It includes features to enter a student's roll number and view their results for four subjects, including MSE (30%) and ESE (70%) marks, along with their total.

---

## Environment Setup Instructions

Follow these steps to set up the environment and run the project:

### 1. Install Required Software
- **XAMPP (or any PHP Server):** Install XAMPP to provide Apache, PHP, and MySQL services.
  - [Download XAMPP](https://www.apachefriends.org/index.html)
- **Text Editor/IDE:** Use VS Code, Sublime Text, or any preferred editor for editing files.

---

### 2. Setting Up the Database
1. Open **phpMyAdmin** via your browser: `http://localhost/phpmyadmin`.
2. Create a new database named **`vit_results`**.
3. Import the `db.sql` file provided in the project folder:
   - Click on the **Import** tab in phpMyAdmin.
   - Choose the `db.sql` file and click **Go**.

---

### 3. Configure the PHP Project
1. Move the project folder to your web server directory:
   - For XAMPP: Place the folder in `C:/xampp/htdocs/`.
2. Open the project folder and locate the `connect.php` file.
3. Update the database credentials if necessary:
   ```php
   $servername = "localhost";
   $username = "root";
   $password = ""; // Default password is empty in XAMPP
   $dbname = "vit_results";

---

### 4. Start the Server
- Launch the XAMPP Control Panel.
    Start the Apache and MySQL services.

---

### 5. Access the Application
1. Open your browser and navigate to:
    http://localhost/index.php
2. Enter a roll number (e.g., 20BCS001 or 20BCS002) to view the results.

### Files Included
    index.php: Entry point for the application.
    connect.php: Database connection script.
    results.php: Logic to fetch and display student results.
    styles.css: CSS for responsive design.
    db.sql: SQL script to set up the database with dummy data.
    
### Key Features
    Responsive UI for desktops and mobile devices.
    Displays results for four subjects with MSE, ESE, and total marks.
    Preloaded with dummy student data.
