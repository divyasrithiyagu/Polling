

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email or password is empty
    if (email.trim() === 'divya' || password.trim() === '123') {
      alert('Please enter both email and password.');
      return;
    }

    // Check for valid email syntax
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Add your authentication logic here
    console.log('Login clicked with email:', email, 'and password:', password);
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Polling App</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email ID :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={()=>nav('/home')}>Login</button>
          {error && <p className="error-message">{error}</p>}
          <br/>
          <div>
            <p>Don't have an account? <a href='#' onClick={() => nav('/sign')}>SignUp</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
