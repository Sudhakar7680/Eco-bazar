import React, { useEffect, useState } from 'react';
import './Myaccount.css';

const Myaccount = () => {
  const [user, setUser] = useState(null);

  // Fetch user details from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    alert('You have been logged out.');
  };
  

  if (!user) {
    return (
      <div>
        <h2>No User Logged In</h2>
        <p>Please <a href="/signup">log in</a> to view your account details.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Account Details</h2>
      <div className="profile-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
        {/* Add more fields if needed */}
      </div>
      <button onClick={handleLogout} className="logout-button">Log Out</button>

    </div>
  );
};

export default Myaccount;
