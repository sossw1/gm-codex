import '../../App.css';

function Login(props) {
  return (
    <div className='ui two column padded grid'>
      <div className='column'>
        <div></div>
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
              <p>Don't have an account? <span className='link' onClick={() => props.authLink('signUp')}>Sign up</span></p>
            </div>
          </form>

      </div>
      <div className='column'>
        
      </div>
    </div>
  );
}

export default Login;
