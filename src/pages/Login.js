import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

    fetch('http://localhost:4000/api/login', requestOptions)
      .then((response) => response.json()) // Parse the JSON response
      .then((result) => {
        console.log(result);
        // Assuming the login was successful, navigate to the home page
        if (result.message === 'Login successful') {
          navigate('/home');
        } else {
          // Handle unsuccessful login here, show an error message or something
          console.log('Login failed');
        }
      })
      .catch((error) => console.log('error', error));
  };

  return (
    <div className='loginContainer'>
      <h2>Login</h2>
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
      </form>
    </div>
  );
}

export default Login;
