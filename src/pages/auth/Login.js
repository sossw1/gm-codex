import './Login.css';

function Login() {
  return(
    <form className='ui icon input'>
      <div className='ui stacked segment'>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='user circle icon'></i>
            <input type='text' name='username' placeholder='username'></input>
          </div>
        </div>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='lock icon'></i>
            <input type='password' name='password' placeholder='password'></input>
          </div>
        </div>
        <div className='ui fluid large grey submit button'>
          Login
        </div>
      </div>
    </form>
  );
}

export default Login;
