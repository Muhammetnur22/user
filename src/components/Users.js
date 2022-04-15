import React, { useContext, useMemo } from "react"
// State
import UsersContext from '../context/usersContext';
// Components
import UserItem from "../components/UserItem";

const Users = ({ userData }) => {
  const { isAuthenticated } = useContext(UsersContext);

  // Returns users data according to user authentication
  const users = useMemo(() => {
    if (isAuthenticated) return userData;
    return userData.length > 0 ? userData.slice(0, 2) : []; 
  }, [isAuthenticated, userData]);

  return (
    <>
      <h1 className="header">Users list</h1>
      {users &&
        <div className="users-list">
          {users.map((user) => <UserItem user={user} key={user.id} />)}
        </div>
      }
    </>
  )
}

export default Users