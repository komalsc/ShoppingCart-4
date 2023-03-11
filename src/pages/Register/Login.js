import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const navigate=useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
   const data = JSON.parse(localStorage.getItem('Obj'))
   console.log(data)
        if(data.email===email && data.password===password){
    window.alert('Login Complete !!');
          navigate('/')
        }else{
          setError('Invalid credential')
          return
        }
  }



  
  return (
    <div className='main'>
    <div className='content'>
      <form className='formcont' onSubmit={handleSubmit}>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <label style={{fontWeight: 'bolder'}} htmlFor="email">Email:</label>
        <input 
        className='input'
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <label style={{fontWeight: 'bolder'}} htmlFor="password">Password:</label>
        <input
        className='input'
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button className='btn' onClick={handleSubmit} type="submit">
          Log in
        </button>
      </form>
      <p className='para' style={{ color: 'blue' }}>
        Don't have an account ?
        <Link className="btn1" aria-current="page" to="/register">
          Register
        </Link>
      </p>
      </div>
      
    </div>
  );
}
export default Login;