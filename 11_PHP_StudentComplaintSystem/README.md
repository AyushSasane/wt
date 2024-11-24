# College Complaint System

## Question 11: PHP Web Application for Registering Complaints for Students in College

### Overview:
This web application allows students to register complaints in a college setting. The system consists of two types of users:
1. **Students**: Can log in to the system and submit complaints.
2. **Admin**: Can log in to the system and view all complaints submitted by students.

The application is built using PHP for the backend and MySQL for the database.

### Steps to Set Up the Application:

#### Step 1: Set Up the Database
1. Create a MySQL database named `college_complaints`.
2. Create the following tables:
   - **students**: To store student login credentials.
   - **complaints**: To store complaints submitted by students.
   - **admins**: To store admin login credentials.
3. Insert initial data:
   - Insert at least one admin user (e.g., `username: admin`, `password: admin123`).
   - Insert a sample student user (e.g., `username: student1`, `password: student1pass`).

#### Step 2: Set Up Database Connection
1. Create a file named `db.php` to manage the database connection.
2. Use the `PDO` method to connect to the MySQL database.
3. Handle any errors in the database connection appropriately.

#### Step 3: Create the Student Login Page
1. Create a file named `login_student.php` for the student login.
2. The login form should ask for the username and password.
3. On form submission, validate the credentials by checking the `students` table in the database.
4. If successful, redirect the student to the complaint submission page (`complaint_page.php`).

#### Step 4: Create the Complaint Submission Page
1. Create a file named `complaint_page.php` for students to submit complaints.
2. The page should allow students to input complaint text and submit it.
3. Upon successful submission, store the complaint in the `complaints` table with the student's ID.
4. After submission, display a confirmation message.

#### Step 5: Create the Admin Login Page
1. Create a file named `login_admin.php` for admin login.
2. The login form should ask for the admin's username and password.
3. On form submission, validate the credentials by checking the `admins` table in the database.
4. If successful, redirect the admin to the dashboard page (`admin_dashboard.php`).

#### Step 6: Create the Admin Dashboard Page
1. Create a file named `admin_dashboard.php` for the admin to view submitted complaints.
2. Retrieve all complaints from the `complaints` table along with the student's username from the `students` table.
3. Display the list of complaints in a tabular format with columns such as:
   - Complaint ID
   - Student Username
   - Complaint Text
   - Date Submitted
4. Provide a logout option for the admin.

#### Step 7: Test the Application
1. Log in as a student using `login_student.php` and submit a complaint through `complaint_page.php`.
2. Log in as an admin using `login_admin.php` and verify that all complaints submitted by students are visible on the `admin_dashboard.php` page.

#### Additional Enhancements (Optional):
1. Implement password hashing using PHP’s `password_hash()` and `password_verify()` for better security instead of MD5.
2. Add validation for form inputs (e.g., for complaint text).
3. Implement additional features like the ability for the admin to mark complaints as resolved.
4. Style the pages with CSS for better user experience.

### Folder Structure:
```bash
.
├── db.php                  # Database connection
├── login_student.php        # Student login page
├── complaint_page.php       # Complaint submission page
├── login_admin.php          # Admin login page
└── admin_dashboard.php      # Admin dashboard page
