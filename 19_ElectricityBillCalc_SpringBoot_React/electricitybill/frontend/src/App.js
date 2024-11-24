import React, { useState } from 'react'; 
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() { 
const [units, setUnits] = useState(''); 
const [totalBill, setTotalBill] = useState(null); 
const [error, setError] = useState(''); 
const handleChange = (event) => { 
setUnits(event.target.value); 
}; 
const handleSubmit = async (event) => { 
event.preventDefault(); 
if (units <= 0 || isNaN(units)) { 
setError('Please enter a valid number of units'); 
return; 
} 
 
    try { 
      // Send POST request to Spring Boot backend 
      const response = await 
axios.post('http://localhost:8080/api/bill/calculate', { units }); 
      setTotalBill(response.data.totalBill); 
      setError(''); 
    } catch (error) { 
      setError('Error calculating the bill. Please try again.'); 
    } 
  }; 
 
  return ( 
    <div className="container mt-5"> 
      <h1 className="text-center">Electricity Bill Calculator</h1> 
      <form onSubmit={handleSubmit}> 
        <div className="form-group"> 
          <label htmlFor="units">Enter Units:</label> 
          <input 
            type="number" 
            className="form-control" 
            id="units" 
            value={units} 
            onChange={handleChange} 
            placeholder="Enter number of units" 
            required 
          /> 
        </div> 
        {error && <div className="alert alert-danger mt-3">{error}</div>} 
        <button type="submit" className="btn btn-primary mt
3">Calculate</button> 
      </form> 
 
      {totalBill !== null && ( 
        <div className="mt-4"> 
          <h3>Total Bill: Rs. {totalBill}</h3> 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default App;