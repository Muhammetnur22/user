import React, { useReducer, useEffect, useMemo } from 'react'
import UsersContext from './usersContext';
import usersReducer from './usersReducer';

const initialState = {
  users: [],
  loading: false,
  isAuthenticated: false,
  token: null,
};

const URL = process.env.GATSBY_API_URL;

const UsersState = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const { users, isAuthenticated, loading, token } = state;

  // Initially fetches users data;
  useEffect(() => {
    // Initialize and Verify user token
    dispatch({ type: "GET_USER" });
    fetchUsers();
  }, []);

  // Sets loading to true
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Fetches users data
  const fetchUsers = async () => {
    setLoading();
    try {
      const res = await fetch(URL);
      const data = await res.json()

      if (data) dispatch({type: "SET_USERS", payload: data});
    } catch (error) {
      console.log(error);
    }
  }
  
  // Returns users data according to user authentication
  const usersData = useMemo(() => {
    if (isAuthenticated) return users;
    return users.length > 0 ? users.slice(0, 2) : []; 
  }, [isAuthenticated, users]);

  // Authenticate User
  const authenticateUser = (key) => {
    setLoading();
    dispatch({ type: 'SET_AUTHENTICATED', payload: key });
  }

  return (
    <UsersContext.Provider
      value={{
        users: usersData,
        loading,
        isAuthenticated,
        token,
        authenticateUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersState;
