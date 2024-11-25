import React, { useState } from 'react';
import StudentLogin from './StudentLogin';
import ComplaintForm from './ComplaintForm';
import AdminLogin from './AdminLogin';
import ComplaintsList from './ComplaintsList';

function App() {
  const [token, setToken] = useState(null);
  const [adminToken, setAdminToken] = useState(null);

  return (
    <div className="App">
      {!token && <StudentLogin setToken={setToken} />}
      {token && <ComplaintForm token={token} />}
      {!adminToken && <AdminLogin setAdminToken={setAdminToken} />}
      {adminToken && <ComplaintsList token={adminToken} />}
    </div>
  );
}

export default App;
