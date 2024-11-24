# Electricity Bill Calculator

## Question 20: Design and develop a responsive website to calculate Electricity bill using PHP.

**Conditions**:
- For the first 50 units: Rs. 3.50/unit
- For the next 100 units: Rs. 4.00/unit
- For the next 100 units: Rs. 5.20/unit
- For units above 250: Rs. 6.50/unit

This project calculates the electricity bill based on the above rates, using a PHP backend and a responsive frontend built with Bootstrap and jQuery.

## Project Features
- **Unit Input**: A user can input the number of units consumed.
- **Bill Calculation**: The backend calculates the bill based on the entered units.
- **Responsive Design**: Uses Bootstrap to ensure the page is responsive on all screen sizes.
- **AJAX Submission**: Uses jQuery to send the data to the backend and get the result without refreshing the page.

---

## Setup Instructions

Follow the steps below to set up the environment and run the project:

### 1. Install a Local Development Environment
To run the PHP code locally, you will need a local server with PHP support. You can use **XAMPP**, **WAMP**, or **MAMP**. Here’s how to install **XAMPP**:

#### For XAMPP (Windows/Mac/Linux):
1. Download XAMPP from [Apache Friends](https://www.apachefriends.org/index.html).
2. Install XAMPP and launch the XAMPP Control Panel.
3. Start **Apache** server.

#### For WAMP (Windows):
1. Download WAMP from [WampServer](http://www.wampserver.com/en/).
2. Install and launch WAMP.
3. Start **Apache** server.

#### For MAMP (Mac):
1. Download MAMP from [MAMP](https://www.mamp.info/en/).
2. Install and launch MAMP.
3. Start **Apache** server.

### 2. Create a Project Folder
1. Create a folder inside the `htdocs` (for XAMPP) or `www` (for WAMP/MAMP) directory.
2. Name it `electricity-bill-calculator` or any other name you prefer.

### 3. Add Project Files
1. Download or create the following two files in the folder:
   - `index.php` (HTML frontend and form handling).
   - `calculate.php` (PHP backend to calculate the bill).

### 4. Open the Project in a Browser
1. Start your local server (Apache).
2. Open a web browser and navigate to `http://localhost/electricity-bill-calculator/` (or the path you created).
3. The electricity bill calculator should be visible.

---

## Code Explanation

### index.php
The `index.php` file contains:
- A **Bootstrap** form where users input the number of units consumed.
- **jQuery** to handle form submission via **AJAX** without refreshing the page.
- A **result div** to display the calculated electricity bill after submission.

### calculate.php
The `calculate.php` file contains:
- The PHP script that takes the number of units as input via a POST request.
- It then calculates the bill based on the defined unit ranges and prices.
- The result is returned and displayed on the frontend.

---

## Code Details

1. **HTML & Bootstrap**: 
   - Provides a responsive form to input the number of units.
   - Styled using Bootstrap 4 for responsiveness.

2. **jQuery**: 
   - Intercepts the form submission and sends the unit value to the server using AJAX.
   - Displays the calculated result without page refresh.

3. **PHP**: 
   - Receives the unit input, performs the calculation based on the pricing logic, and sends the result back to the frontend.

---

## Example Calculation

For example, if the user enters 300 units:
- For the first 50 units: 50 * Rs. 3.50 = Rs. 175
- For the next 100 units: 100 * Rs. 4.00 = Rs. 400
- For the next 100 units: 100 * Rs. 5.20 = Rs. 520
- For the remaining 50 units (above 250): 50 * Rs. 6.50 = Rs. 325

**Total Bill**: Rs. 175 + Rs. 400 + Rs. 520 + Rs. 325 = **Rs. 1420**

---

## Technologies Used
- **PHP** for server-side logic.
- **Bootstrap 4** for responsive design.
- **jQuery** for handling AJAX form submission.
- **HTML5** and **CSS** for basic layout and styling.

---

## License
This project is open-source and free to use. Feel free to modify and customize it for your needs.

---

## Contributing
Feel free to fork this project and submit pull requests for improvements or fixes.
