import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/complaint" element={<ComplaintForm />} />
        <Route path="/admin/complaints" element={<ComplaintList />} />
      </Routes>
    </Router>
  );
}

export default App;
