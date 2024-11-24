# PHP Login System with User Registration and Session Handling

## Question No: 26

### Question:
Design a PHP login module with a user registration form, a login form, and session handling. The system should use cookies to track users. Use a MySQL database for storing login credentials and session data.

### System Overview:
This project is a PHP-based login system that allows users to register, log in, and maintain a session for tracking their login status. The system also uses cookies to remember users across sessions. It is connected to a MySQL database for storing user information securely.

---

## Flow of the Application

### 1. **Database Setup**
The system requires a MySQL database to store user credentials and session data. 

- **Step 1**: Create the database by executing the `db.sql` file. This file contains the SQL commands to create the `user_login_system` database and the `users` table, which holds user information (e.g., `username`, `password`, and `email`).

- **Step 2**: Insert some dummy user data into the database for testing purposes.

### 2. **User Registration (register.php)**
Users can sign up by filling out a registration form. The form requires:
- **Username**: A unique username.
- **Password**: A secure password (hashed for security).
- **Email**: A valid email address.

**Flow**:
- The user submits the registration form.
- The system checks if the username or email already exists in the database.
- If not, it inserts the user into the database with a hashed password.
- A success message is displayed with a link to the login page.

### 3. **User Login (login.php)**
Users log in by entering their **username** and **password**.

**Flow**:
- The system verifies the entered credentials by comparing the password with the hashed password stored in the database.
- Upon successful login, a session is created to track the user, and cookies are set for longer-term tracking.
- A welcome message is shown, and a link to log out is provided.

### 4. **Check User Login (check_user.php)**
This page checks whether the user is logged in by verifying the session or cookie data.

**Flow**:
- If the user is logged in, their username is displayed.
- If the user is not logged in, the system prompts the user to log in.

### 5. **User Logout (logout.php)**
The logout process clears the session and removes cookies.

**Flow**:
- The user clicks the logout link.
- The session is destroyed, and cookies are deleted.
- The user is redirected to the login page.

---

## How to Set Up and Run the System

### Prerequisites
- **PHP**: Ensure you have PHP installed on your local or remote server.
- **MySQL**: A MySQL database server (e.g., XAMPP, WAMP, or a remote server).
- **Web Server**: A web server that supports PHP (e.g., Apache).

### Steps to Run the System:

1. **Download/Clone the Project**:
   - Clone or download the project folder that contains the PHP files (`register.php`, `login.php`, `logout.php`, `check_user.php`, `db.php`).

2. **Set Up the Database**:
   - Open your MySQL client (e.g., phpMyAdmin, MySQL Workbench, or command line).
   - Run the `db.sql` file to create the `user_login_system` database and `users` table.
     - You can execute the SQL script directly in phpMyAdmin or use the command line to run the script:
       ```sql
       source path_to_db.sql;
       ```

3. **Configure Database Connection**:
   - Open the `db.php` file and modify the database connection parameters (`$host`, `$dbname`, `$username`, `$password`) according to your MySQL configuration.

4. **Upload Files to Your Server**:
   - Upload the PHP files to the root directory of your web server. If you're using XAMPP, the directory would be `htdocs` (e.g., `C:\xampp\htdocs\login_system\`).

5. **Access the Application**:
   - In your browser, go to `http://localhost/login_system/register.php` to register a new user.
   - After registration, log in using `http://localhost/login_system/login.php`.
   - After logging in, check your login status at `http://localhost/login_system/check_user.php`.
   - Logout by visiting `http://localhost/login_system/logout.php`.

### Testing the System:
1. **Registration**:
   - Go to `register.php` and create a new account with a unique username and email.
   - If successful, you'll see a message indicating the registration was successful with a link to log in.

2. **Login**:
   - After registering, go to the login page (`login.php`).
   - Enter the credentials (e.g., username `john_doe` and password `secret123`).
   - If credentials are correct, you'll be logged in and redirected to the main page with a welcome message.

3. **Check Login Status**:
   - After logging in, visit `check_user.php` to check the current login status. It will display a welcome message with the logged-in user's username.

4. **Logout**:
   - Visit `logout.php` to log out. The session and cookies will be cleared, and you'll be redirected to the login page.

---

## File Structure

```plaintext
login_system/
│
├── db.php              // Database connection script
├── db.sql              // SQL file to create database and insert dummy data
├── register.php        // Registration page
├── login.php           // Login page
├── logout.php          // Logout script
├── check_user.php      // Check user login status
└── README.md           // This file

---

## Security Considerations:
Password Hashing: The system uses password_hash() to securely store passwords in the database and password_verify() to validate login credentials.
Sessions: PHP sessions are used to track users after they log in. The session ID is stored on the server, and a cookie with the session ID is stored on the user's browser.
Cookies: Cookies are used optionally to "remember" the user for future sessions (e.g., by setting a cookie with the username).