function SignUp(props) {
  return (
    <form className='ui form icon input' onSubmit={props.signUp}>
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
            <i className='envelope outline icon'></i>
            <input
              type='text' name='email' placeholder='email'
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
        <input type='submit' value='Sign Up'
          className='ui fluid large grey submit button'></input>
        <p>Already have an account? <span className='link' onClick={() => props.authLink('signIn')}>Sign In</span></p>
      </div>
    </form>
  )
}

export default SignUp;
