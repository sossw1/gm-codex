import './Login.css';

function Login() {
  return(
    <form class='ui icon input'>
      <div class='ui stacked segment'>
        <div class='field'>
          <div class='ui left icon input'>
            <i class='user circle icon'></i>
            <input type='text' name='username' placeholder='username'></input>
          </div>
        </div>
        <div class='field'>
          <div class='ui left icon input'>
            <i class='lock icon'></i>
            <input type='password' name='password' placeholder='password'></input>
          </div>
        </div>
        <div class='ui fluid large grey submit button'>
          Login
        </div>
      </div>
    </form>
  );
}

export default Login;
