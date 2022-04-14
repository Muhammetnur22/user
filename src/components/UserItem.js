import React from 'react'

const UserItem = ({ user }) => {
  return (
    <div className='user-data'>
      <p>{user?.id})</p>
      <h3 className="user">{user?.name}</h3>
      <p>({user?.username})</p>
    </div>
  )
}

export default UserItem