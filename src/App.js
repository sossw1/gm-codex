import './App.css';
import Login from './pages/auth/Login';
import React, { useState, useEffect } from 'react';

function App() {
  const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
  }
  const [formState, setFormState] = useState(initialFormState);
  function onChange(e) {
    e.persist();
    setFormState(() => ({...formState, [e.target.name]: e.target.value}))
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
