import React, { useContext } from "react"
// State
import UsersContext from '../context/usersContext';
// Components
import UserItem from "../components/UserItem";


const Users = () => {
  
  const { users, loading } = useContext(UsersContext);

  return (
    <>
      <h1 className="header">User list</h1>
      {loading ? <p>Loading...</p> :
        users && 
        <div className="users-list">
          {users.map((user) => <UserItem user={user} />)}
        </div>
      }
    </>
  )
}

export default Users