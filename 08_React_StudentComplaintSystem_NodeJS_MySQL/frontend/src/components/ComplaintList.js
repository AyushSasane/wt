import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const response = await axios.get('http://localhost:5000/api/complaints/all');
      setComplaints(response.data);
    };
    fetchComplaints();
  }, []);

  return (
    <div>
      <h2>All Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>{complaint.complaint_text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintList;
