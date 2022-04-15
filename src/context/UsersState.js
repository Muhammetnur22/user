import React, { useReducer, useEffect } from 'react'
// State
import UsersContext from './usersContext';
import usersReducer from './usersReducer';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const UsersState = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const { isAuthenticated, token } = state;

  // Initialize and Verify user token
  useEffect(() => {
    dispatch({ type: "GET_USER" });
  }, []);

  // Authenticate User
  const authenticateUser = (key) => {
    dispatch({ type: 'SET_AUTH_KEY', payload: key });
  }

  return (
    <UsersContext.Provider
      value={{
        // state
        isAuthenticated,
        token,
        // methods
        authenticateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersState;
