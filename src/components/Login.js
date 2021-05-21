import React, { useEffect, useState } from "react";
import axios from 'axios';

const initialLogin = {
  username: '',
  password: '',
}
const Login = (props) => {
  const [ login, setLogin ] = useState(initialLogin);
  const [error, setError] = useState('');
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  },[]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({...login, [name]: value});
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', login)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setError('');
        props.history.push('/BubblePage');
      })
      .catch(err => {
        setError('Please enter a valid Username and Password.')
        console.log(err);
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleLogin}>
          <label>
            <input data-testid="username"
              type='text'
              name='username'
              value={login.username}
              onChange={handleChange}
              placeholder='Username'
            />
          </label>

          <label>
            <input data-testid="password"
              type='text'
              name='password'
              value={login.password}
              onChange={handleChange}
              placeholder={'Password'}
            />
          </label>
          <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.