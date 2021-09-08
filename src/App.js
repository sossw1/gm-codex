import './App.css';
import Login from './pages/auth/Login';
import React, { useState, useEffect } from 'react';

function App() {
  const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signIn'
  }

  const [formState, setFormState] = useState(initialFormState);
  function onChange(e) {
    e.persist();
    setFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
  }

  const { formType } = formState;

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
        formType === 'signIn' && (
          <div>
            <input name='username' onchange={onChange} placeholder='username' /><br/>
            <input name='password' type='password' onchange={onChange} placeholder='password' /><br/>
            <button>Sign In</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
