import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const navigate= useNavigate()


  function validateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  function handleSubmit(e) {
    e.preventDefault();

    function validateName(name) {
      return /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    }
    if (!validateName(name)) {
      setError('Invalid User name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
    function validatePassword(password) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        password
      );
    }

    if (!validatePassword(password)) {
      setError('Invalid password');
      return;
    }

    const Obj={
      name: name,
      email:email,
      password: password,
  
    }
    const setitem = localStorage.setItem('Obj', JSON.stringify(Obj))
    console.log(setitem)
    setError(error);
    window.alert('Registration Complete !!'); 
    navigate('/Login')

  }

  return (
    <div className='main'>
        <div className='content'>
    <form className='formcont' onSubmit={handleSubmit}>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <label style={{fontWeight: 'bolder'}} htmlFor="name">Name:</label>
      <input
      className='input'
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label style={{fontWeight: 'bolder'}} htmlFor="email">Email:</label>
      <input
      className='input'
        type="text"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label style={{fontWeight: 'bolder'}} htmlFor="password">Password:</label>
      <input
      className='input'
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <button className='btn' onClick={handleSubmit} type="submit">
        Create Account
      </button>
    </form>
    </div>
    </div>
  );
}

export default Register;