// frontend/src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Online Bookstore</h1>
            <nav>
                <ul>
                    <li><Link to="/catalogue">View Catalogue</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
