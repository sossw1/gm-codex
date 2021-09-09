function ConfirmSignUp(props) {
  return (
    <form className='ui form icon input' onSubmit={props.confirmSignUp}>
      <div className='ui segment'>
        <div className='field'>
          <div className='ui left icon input'>
            <i className='check square outline icon'></i>
            <input
              type='text' name='authCode' placeholder='Confirmation Code'
              onChange={props.onChange}
            ></input>
          </div>
        </div>
        <input type='submit' value='Confirm'
          className='ui fluid large grey submit button'></input>
      </div>
    </form>
  )
}

export default ConfirmSignUp;
