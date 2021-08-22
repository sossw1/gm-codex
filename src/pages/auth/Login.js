import { useState } from 'react';
import { Auth } from 'aws-amplify';

function Login() {
  const [username, setUsername] = useState('');
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  const [password, setPassword] = useState('');
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form className='ui form icon input'>
      <div className='ui segment'>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='user circle icon'></i>
            <input
              type='text' name='username' placeholder='username'
              onChange={handleUsernameChange}
            ></input>
          </div>
        </div>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='lock icon'></i>
            <input type='password' name='password' placeholder='password'
              onChange={handlePasswordChange}></input>
          </div>
        </div>
        <input type='submit' value='Login'
          className='ui fluid large grey submit button'></input>
      </div>
    </form>
  );
}

export default Login;
