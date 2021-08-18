import './Login.css';

function Login() {
  return(
    <form>
      <label htmlFor='username'>Username</label><br/>
      <input id='username' name='username' type='text'></input><br/>
      <label htmlFor='password'>Password</label><br/>
      <input id='password' name='password' type='password'></input><br/><br/>
      <input id='submit' type='submit'></input>
    </form>
  );
}

export default Login;
