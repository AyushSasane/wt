import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/complaint', { title, description, studentId: token }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Complaint submitted');
    } catch (err) {
      alert('Complaint submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default ComplaintForm;