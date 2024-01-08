import React from 'react'
import UserCard from './UserCard'

const UserList = ({list}) => {
  return (
    <div>
        { React.Children.toArray(list.map(el=><UserCard user={el} />))}
    </div>
  )
}

export default UserList