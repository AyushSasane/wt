# Online Shopping System for Farmers

28. Design and develop online shopping system where farmers can sell their agriculture products online using PHP and MySQL make assumptions about how system should be.

## Features

- User registration and login (for both farmers and customers)
- Farmers can add and manage their products
- Customers can browse products and add them to their cart
- Basic cart functionality with total price calculation

## Requirements

- A web server with PHP and MySQL (e.g., XAMPP, WAMP, MAMP)
- Basic knowledge of PHP and MySQL

## Setup Instructions

### Step 1: Set Up Your Environment

1. **Install a Web Server with PHP and MySQL:**
   - Download and install XAMPP, WAMP, or MAMP based on your operating system.

2. **Start the Server:**
   - Open the control panel for your chosen package (e.g., XAMPP Control Panel) and start the Apache and MySQL services.

### Step 2: Create the Database

1. **Open phpMyAdmin:**
   - In your web browser, navigate to `http://localhost/phpmyadmin`.

2. **Create the Database:**
   - Click on the "Databases" tab.
   - Enter `online_shopping` as the database name and click "Create."

3. **Run the SQL Script:**
   - Click on the newly created database (`online_shopping`).
   - Click on the "SQL" tab, copy the SQL script provided in the project, and paste it into the SQL query box.
   - Click "Go" to execute the script, which will create the necessary tables.

### Step 3: Set Up PHP Files

1. **Create a Project Directory:**
   - Navigate to the `htdocs` directory (for XAMPP) or `www` directory (for WAMP) in your installation folder.
   - Create a new folder named `online_shopping`.

2. **Create PHP Files:**
   - Inside the `online_shopping` folder, create the following PHP files:
     - `db.php`
     - `register.php`
     - `login.php`
     - `add_product.php`
     - `products.php`
     - `add_to_cart.php`
     - `cart.php`

### Step 4: Access the Application

1. **Open Your Web Browser:**
   - Navigate to `http://localhost/online_shopping/register.php` to create a new user account.

2. **Register a Farmer Account:**
   - Fill out the registration form, selecting "farmer" as the role, and submit it.

3. **Login as Farmer:**
   - Go to `http://localhost/online_shopping/login.php` and log in with the credentials you just created.

4. **Add Products:**
   - After logging in, navigate to `http://localhost/online_shopping/add_product.php` to add agricultural products to the system. Fill out the product details and submit.

5. **Browse Products:**
   - Go to `http://localhost/online_shopping/products.php` to view the list of products available for purchase. You can add products to your cart from this page.

6. **Add to Cart:**
   - Use the "Add to Cart" functionality on the products page to select a quantity and add the product to your cart.

7. **View Cart:**
   - Navigate to `http://localhost/online_shopping/cart.php` to view the items in your cart and the total amount.

### Step 5: Testing and Further Development

- **Testing:**
  - Test the functionalities by adding multiple products, logging in as different users, and checking the cart system.
  
- **Development:**
  - You can enhance the system by adding features such as:
    - Order processing and confirmation.
    - Payment integration (like PayPal or Stripe).
    - User profile management.
    - Admin panel for managing users and products.
    - Improved UI/UX with CSS frameworks like Bootstrap.

### Notes

- **Security Considerations:**
  - The provided code is a basic implementation and lacks several security features (e.g., input validation, protection against SQL injection). Be sure to implement proper security measures in a production environment.
  
- **Dependencies:**
  - Make sure that your PHP installation has the PDO extension enabled, as it is used for database interactions.

By following these steps, you should be able to set up and run the online shopping system for farmers on your local machine.