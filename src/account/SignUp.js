import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation after login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user exists and credentials match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log('Logged in');
      alert('Login Successful!');
      navigate('/home'); // Redirect to a dashboard or homepage
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Create an account</a></p>
    </div>
  );
};

export default SignUp;
