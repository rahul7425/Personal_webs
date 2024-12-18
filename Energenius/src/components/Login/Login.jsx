import React, { useState } from 'react';
import './LoginForm.css';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const url = "http://localhost:5000/api/admin/login";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: username,
        password: password  
      })
    });
  
    if (response.status===200) {
      const data = await response.json();
      console.log(data,"ddddddddd");
      // localStorage.setItem('userToken', data.token);
      localStorage.setItem('userInfo', JSON.stringify(data.user));
  
      // Redirect or update UI accordingly
      console.log('Login successful');
      
      navigate("/")
      window.location.reload();
    } else {
      // Handle errors here
      console.error('Login failed');
    }
  
    // Log the username and password (for debugging purposes, remove in production)
    console.log('Username:', username);
    console.log('Password:', password);
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"12px"}}>Admin-Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='buttonn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
