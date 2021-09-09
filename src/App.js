import './App.css';
import Login from './pages/auth/Login';
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

function App() {
  const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signIn'
  }

  const [formState, setFormState] = useState(initialFormState);
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
    setFormState(() => ({ ...formState, formType: 'signIn' }));
  }

  async function signIn() {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    setFormState(() => ({ ...formState, formType: 'signedIn' }));
  }

  return (
    <div className="App">
      {
        formType === 'signUp' && (
          <div>
            <input name='username' onchange={onChange} placeholder='username' /><br />
            <input name='email' onchange={onChange} placeholder='email' /><br />
            <input name='password' type='password' onchange={onChange} placeholder='password' /><br />
            <button>Sign Up</button>
          </div>
        )
      }
      {
        formType === 'confirmSignUp' && (
          <div>
            <input name='authCode' onchange={onChange} placeholder='Confirmation code' /><br />
            <button>Confirm Sign Up</button>
          </div>
        )
      }
      {
        formType === 'signIn' && (
          <div>
            <input name='username' onchange={onChange} placeholder='username' /><br />
            <input name='password' type='password' onchange={onChange} placeholder='password' /><br />
            <button>Sign In</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
