import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <h4>{user.address.street}</h4>
        <h1>{`${user.address.geo.lat}  
          ${user.address.geo.lng}`}</h1>
          <Link to={`/info/${user.id}`}>
    <button>Info</button>
          </Link>
        <hr />
    </div>
  )
}

export default UserCard