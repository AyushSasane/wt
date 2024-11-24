# Question 14: Electricity Bill Calculator

## **Question**
Design and develop a responsive website to calculate the electricity bill using Node.js.  
The conditions for calculating the electricity bill are as follows:  
- For the first 50 units – ₹3.50/unit  
- For the next 100 units – ₹4.00/unit  
- For the next 100 units – ₹5.20/unit  
- For units above 250 – ₹6.50/unit  

---

## **Setup Instructions**
Follow these steps to set up and run the project locally:

### 1. **Initialize the Environment**
Initialize the Node.js project and install dependencies:
```bash
npm init -y
npm install express body-parser

---

2. Start the Server
Run the server using the following command:

node server.js

---

3. Access the Application
Open your browser and navigate to:
http://localhost:3000

---

Project Structure

electricity-bill-calculator/
├── public/
│   ├── css/
│   │   └── styles.css       # Custom styles for the application
│   ├── js/
│   │   └── script.js        # jQuery for dynamic AJAX calls
│   └── index.html           # Frontend HTML file
├── server.js                # Node.js server logic
├── package.json             # Project dependencies and metadata
└── README.md                # Project documentation
How to Use
Enter the number of units consumed in the input field.
Click the "Calculate" button.
View the calculated electricity bill displayed instantly on the page.
Sample Logic
Electricity bill calculation:

If units ≤ 50: bill = units * 3.50
If units > 50 and ≤ 150: bill = (50 * 3.50) + ((units - 50) * 4.00)
If units > 150 and ≤ 250: bill = (50 * 3.50) + (100 * 4.00) + ((units - 150) * 5.20)
If units > 250: bill = (50 * 3.50) + (100 * 4.00) + (100 * 5.20) + ((units - 250) * 6.50)