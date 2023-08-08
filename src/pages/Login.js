import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold the error message
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(''); // Clear any previous error message
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://54.166.127.242:4000/api/login', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(addUser(result));
        console.log(result);
        if (result.message === 'Login successful') {
          navigate('/home');
        } else {
          // Handle unsuccessful login here
          setError('Invalid email or password'); // Set the error message
        }
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className='loginContainer'>
      <h2 className='loginHeading'>Welcome Back!</h2>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div className='loginEmail'>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className='loginPassword'>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className='loginButton' type="submit">Login</button>
        {error && <p className='errorMessage'>{error}</p>} {/* Display error message if it exists */}
      </form>
      <p className='signupLink'>Don't have an account? {<Link className="navLink" to="/register">Sign Up</Link>}</p>
    </div>
  );
}

export default Login;
