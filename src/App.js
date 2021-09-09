import './App.css';
import Login from './pages/auth/Login';
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

function App() {
  const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signIn'
  }

  const [formState, setFormState] = useState(initialFormState);
  const [user, setUser] = useState(null);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      console.log('user: ', user);
      setFormState(() => ({ ...formState, formType: 'signedIn' }));
    } catch (error) {
      // setUser(null);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
  }

  const { formType } = formState;

  async function signUp() {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    setFormState(() => ({ ...formState, formType: 'confirmSignUp' }));
  }

  async function confirmSignUp() {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    setFormState(() => ({ ...formState, formType: 'signedIn' }));
  }

  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    setFormState(() => ({ ...formState, formType: 'signedIn' }));
  }

  async function signOut() {
    await Auth.signOut();
    setFormState(() => ({ ...formState, formType: 'signIn' }))
  }

  return (
    <div className="App">
      {
        formType === 'signUp' && (
          <div>
            <input name='username' onChange={onChange} placeholder='username' /><br />
            <input name='email' onChange={onChange} placeholder='email' /><br />
            <input name='password' type='password' onChange={onChange} placeholder='password' /><br />
            <button onClick={signUp}>Sign Up</button>
          </div>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <div>
            <input name='authCode' onChange={onChange} placeholder='Confirmation code' /><br />
            <button onClick={confirmSignUp}>Confirm Sign Up</button>
          </div>
        )
      }
      {
        formType === 'signIn' && (
          <div>
            <input name='username' onChange={onChange} placeholder='username' /><br />
            <input name='password' type='password' onChange={onChange} placeholder='password' /><br />
            <button onClick={signIn}>Sign In</button>
          </div>
        )
      }
      {
        formType === 'signedIn' && (
          <div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
