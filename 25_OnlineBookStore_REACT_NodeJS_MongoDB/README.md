# Question No: 25
# Question: Design and develop a responsive website for an online book store using REACT, Node JS and MongoDB having:
# 1) Home Page
# 2) Login Page
# 3) Catalogue Page
# 4) Registration Page
# (Use MongoDB for database, and use frontend & backend folders)

# Step 1: Initialize Backend Project (Node.js)

# Create backend folder
mkdir backend
cd backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express mongoose cors body-parser dotenv

# Step 2: Initialize Frontend Project (React)

# Go back to project root and create frontend directory
cd ..
npx create-react-app frontend

# Go to frontend folder
cd frontend

# Install additional dependencies
npm install react-router-dom axios

# Step 3: Backend Setup (Creating Files)

cd ../backend

# Create .env file for environment variables
echo "MONGODB_URI=mongodb://localhost:27017/bookstore" > .env

# Create server.js (copy-paste the server code into it manually after creation)
echo "// Create your backend server.js manually, follow the previous example!" > server.js

# Step 4: Start Backend and Frontend

# Go back to project root
cd ..

# Start Backend
cd backend
node server.js &

# Start Frontend
cd ../frontend
npm start
