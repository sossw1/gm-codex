import './App.css';
import Login from './pages/auth/Login';
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

function App() {
  const initialAuthState = {
    username: '', password: '', email: '', authCode: '', authStatus: 'signIn'
  }

  const [authState, setAuthState] = useState(initialAuthState);
  const [user, setUser] = useState(null);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log('user: ', user);
      setAuthState(() => ({ ...authState, authStatus: 'signedIn' }));
    } catch (error) {
      // setUser(null);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  function onChange(e) {
    setAuthState(() => ({ ...authState, [e.target.name]: e.target.value }));
  }

  const { authStatus } = authState;

  async function signUp() {
    const { username, email, password } = authState;
    await Auth.signUp({ username, password, attributes: { email } });
    setAuthState(() => ({ ...authState, authStatus: 'confirmSignUp' }));
  }

  async function confirmSignUp() {
    const { username, authCode } = authState;
    await Auth.confirmSignUp(username, authCode);
    setAuthState(() => ({ ...authState, authStatus: 'signedIn' }));
  }

  async function signIn() {
    const { username, password } = authState;
    await Auth.signIn(username, password);
    setAuthState(() => ({ ...authState, authStatus: 'signedIn' }));
  }

  async function signOut() {
    await Auth.signOut();
    setAuthState(() => ({ ...authState, authStatus: 'signIn' }))
  }

  return (
    <div className="App">
      {
        authStatus === 'signUp' && (
          <div>
            <input name='username' onChange={onChange} placeholder='username' /><br />
            <input name='email' onChange={onChange} placeholder='email' /><br />
            <input name='password' type='password' onChange={onChange} placeholder='password' /><br />
            <button onClick={signUp}>Sign Up</button>
          </div>
        )
      }
      {
        authStatus === 'confirmSignUp' && (
          <div>
            <input name='authCode' onChange={onChange} placeholder='Confirmation code' /><br />
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
          </div>
        )
      }
      {
        authStatus === 'signIn' && (
          <Login onChange={onChange} signIn={signIn}/>
        )
      }
      {
        authStatus === 'signedIn' && (
          <div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
