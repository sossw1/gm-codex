import './App.css';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ConfirmSignUp from './pages/auth/ConfirmSignUp';
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

function App() {
  const [authState, setAuthState] = useState({
    username: '', password: '', email: '', authCode: ''
  });

  function onChange(e) {
    setAuthState(() => ({ ...authState, [e.target.name]: e.target.value }));
  }

  async function signUp(e) {
    e.preventDefault();
    const { username, email, password } = authState;
    await Auth.signUp({ username, password, attributes: { email } });
    // redirect
  }

  async function confirmSignUp(e) {
    e.preventDefault();
    const { username, authCode } = authState;
    await Auth.confirmSignUp(username, authCode);
    // redirect
  }

  async function signIn(e) {
    e.preventDefault();
    const { username, password } = authState;
    await Auth.signIn(username, password);
    // redirect
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
