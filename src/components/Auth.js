import React, { useContext, useState, useRef } from "react"
// State
import UsersContext from '../context/usersContext';

// app secret key
const key = process.env.GATSBY_SECRET_KEY

const Auth = () => {
  // External Hooks
  const { isAuthenticated, authenticateUser }  = useContext(UsersContext);
  // Inner Hooks
  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState('');

  const handleClickAuthButton = () => setToggle((prevState) => !prevState);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (inputRef.current) {
      const secretKey = inputRef.current.value;
      if (secretKey || secretKey !== '') {
        // Validate secretKey
        if (secretKey === key) {
          return authenticateUser(secretKey);
        }
        return setError('Incorrect secret key!')
      }
      return setError('Please input a secret key!')
    }
    return setError('Error occurred!');
  }

  if (isAuthenticated) return null;
  return (
    <>
      <p className="message">Please enter the password to see all users</p>
      <button className="auth-button" onClick={handleClickAuthButton}>Authorize</button>
      {toggle &&
        <form onSubmit={handleSubmitForm}>
          <div className="input-wrapper">
            <input ref={inputRef} className="input-control" type="text" placeholder="Secret key" /> <br />
            <button className="submit-button" type="submit">Submit</button>
          </div>
          {error && <p className="error">{error}</p> }
        </form>
      }
    </>
  )
}

export default Auth;