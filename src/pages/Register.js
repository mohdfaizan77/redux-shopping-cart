import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setError('');
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
  
      var raw = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
  
      fetch('http://54.166.127.242:4000/api/register', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.message === 'User registered successfully') {
            navigate('/login');
          } else {
            setError('Registration failed. Please try again.');
          }
        })
        .catch((error) => console.log('error', error));
    };
  
    return (
      <div className='registerContainer'>
        <h2 className='registerHeading'>Create an Account</h2>
        <form className='registerForm' onSubmit={handleSubmit}>
          <div className='registerName'>
            <label>Full Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div className='registerEmail'>
            <label>Email Address:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className='registerPassword'>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button className='registerButton' type="submit">Register</button>
          {error && <p className='errorMessage'>{error}</p>}
        </form>
        <p className='loginLink'>Already have an account? <Link className="navLink" to="/">Login here</Link></p>
      </div>
    );
}

export default Register;



