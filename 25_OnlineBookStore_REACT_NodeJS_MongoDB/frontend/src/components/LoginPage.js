// frontend/src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // This hook allows for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const userData = { email, password };
        
        try {
            // Call the backend login API
            const response = await axios.post('http://localhost:5000/api/login', userData);

            // Assuming the backend sends a success message or token if login is successful
            if (response.status === 200) {
                // Redirect to the Catalogue page after successful login
                navigate('/catalogue'); // Redirect to the Catalogue page
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            // Handle error from the server
            console.error(err);
            setError('An error occurred during login');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
