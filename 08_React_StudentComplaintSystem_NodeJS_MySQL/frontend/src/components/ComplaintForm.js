import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = () => {
  const [complaintText, setComplaintText] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/api/complaints/add', {
      student_name: 'Student Name',
      complaint_text: complaintText
    });
    alert(response.data.message);
  };

  return (
    <div>
      <h2>Register Complaint</h2>
      <textarea
        value={complaintText}
        onChange={(e) => setComplaintText(e.target.value)}
        placeholder="Enter your complaint"
      />
      <button onClick={handleSubmit}>Submit Complaint</button>
    </div>
  );
};

export default ComplaintForm;
