import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch results from backend
    axios.get("http://localhost:5001/results")
      .then(response => setResults(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>VIT Semester Results</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg Number</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
            <th>Subject 4</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.reg_number}>
              <td>{result.student_name}</td>
              <td>{result.reg_number}</td>
              <td>{result.subject1_mse * 0.3 + result.subject1_ese * 0.7}</td>
              <td>{result.subject2_mse * 0.3 + result.subject2_ese * 0.7}</td>
              <td>{result.subject3_mse * 0.3 + result.subject3_ese * 0.7}</td>
              <td>{result.subject4_mse * 0.3 + result.subject4_ese * 0.7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
