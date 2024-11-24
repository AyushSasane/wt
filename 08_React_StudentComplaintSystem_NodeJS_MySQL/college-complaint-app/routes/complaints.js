const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Register complaint
router.post('/add', (req, res) => {
  const { student_name, complaint_text } = req.body;
  const query = 'INSERT INTO complaints (student_name, complaint_text) VALUES (?, ?)';
  db.query(query, [student_name, complaint_text], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to register complaint' });
    }
    res.status(200).json({ message: 'Complaint registered successfully!' });
  });
});

// List all complaints for admin
router.get('/all', (req, res) => {
  const query = 'SELECT * FROM complaints';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch complaints' });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
