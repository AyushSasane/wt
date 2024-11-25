import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [dollars, setDollars] = useState('');
  const [rupees, setRupees] = useState('');

  // Hardcoded exchange rate (1 USD = 83.5 INR, this can be updated)
  const exchangeRate = 83.5;

  // Event handler for input change
  const handleDollarChange = (e) => {
    const value = e.target.value;
    setDollars(value);

    // Convert to rupees when the input value changes
    if (value) {
      const convertedAmount = parseFloat(value) * exchangeRate;
      setRupees(convertedAmount.toFixed(2)); // Setting two decimal places
    } else {
      setRupees('');
    }
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="converter">
        <label htmlFor="dollars">Amount in USD:</label>
        <input
          type="number"
          id="dollars"
          value={dollars}
          onChange={handleDollarChange}
          placeholder="Enter amount in dollars"
        />
        <p>
          <strong>Converted to INR:</strong> ₹{rupees}
        </p>
      </div>
    </div>
  );
}

export default App;
