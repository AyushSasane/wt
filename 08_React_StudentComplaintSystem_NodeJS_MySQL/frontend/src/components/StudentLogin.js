import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle the form submission
  const handleLogin = async () => {
    try {
      // Sending credentials to the backend (this is a basic implementation)
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      // If login is successful, redirect to the complaints form page
      if (response.data.success) {
        navigate('/student/complaint');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Something went wrong, please try again');
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default StudentLogin;
