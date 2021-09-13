import '../../App.css';

function Login(props) {
  return (
    <form className='ui form icon input' onSubmit={props.signIn}>
      <div className='ui segment'>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='user circle icon'></i>
            <input
              type='text' name='username' placeholder='username'
              onChange={props.onChange}
            ></input>
          </div>
        </div>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='lock icon'></i>
            <input type='password' name='password' placeholder='password'
              onChange={props.onChange}></input>
          </div>
        </div>
        <input type='submit' value='Login'
          className='ui fluid large grey submit button'></input>
        <p>Don't have an account? <span className='link' onClick={props.goToSignUp}>Sign up</span></p>
      </div>
    </form>
  );
}

export default Login;
