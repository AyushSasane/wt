import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComplaintsList = ({ token }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('http://localhost:5000/complaints', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setComplaints(response.data);
      } catch (err) {
        console.log('Error fetching complaints');
      }
    };

    fetchComplaints();
  }, [token]);

  return (
    <div>
      <h2>All Complaints</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>{complaint.title}: {complaint.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintsList;
