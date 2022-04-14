import React, { useContext } from "react"
// State
import UsersContext from '../context/usersContext';
// Components
import User from "../components/UserItem";
// Style
import  '../styles/main.css'


// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyIiwibmFtZSI6Ik11aGFtbWV0bnVyIiwiaWF0IjoxNTE2MjM5MDIyfQ.HElT93GADwcNYnmJEWIkqnBEt4TdvzejCKG8L6K1Bjs



const Users = () => {
  const usersContext = useContext(UsersContext);
  const { users, loading, handleChangeAuthenticated, isAuthenticated } = usersContext;

  if(loading) return <p>Loading...</p>
  return (
    <div className="container">
      <h1 className="header">User list</h1>
      {users && users.map((user) => {
        return (
          <h2 className="user">{user?.name}</h2>
        )
      })}
      <p className="message">Please enter the password to see all users</p>
      <button onClick={handleChangeAuthenticated}>Authorize</button>
      <p>{isAuthenticated ? 'Authenticated' : 'NOT Authenticated'}</p> 
    </div>
  )
}

export default Users

