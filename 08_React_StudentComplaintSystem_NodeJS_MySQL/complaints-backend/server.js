const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Route for student login
app.post('/login/student', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM students WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(400).send('Invalid email or password');
    
    bcrypt.compare(password, result[0].password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match) return res.status(400).send('Invalid email or password');
      
      const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
      res.json({ token });
    });
  });
});

// Route for student complaint submission
app.post('/complaint', (req, res) => {
  const { title, description, studentId } = req.body;
  db.query(
    'INSERT INTO complaints (title, description) VALUES (?, ?)',
    [title, description],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(200).send('Complaint registered successfully');
    }
  );
});

// Route for admin login
app.post('/login/admin', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM admin WHERE username = ?', [username], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(400).send('Invalid username or password');
    
    bcrypt.compare(password, result[0].password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match) return res.status(400).send('Invalid username or password');
      
      const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET);
      res.json({ token });
    });
  });
});

// Route for listing all complaints for admin
app.get('/complaints', (req, res) => {
  db.query('SELECT * FROM complaints', (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
