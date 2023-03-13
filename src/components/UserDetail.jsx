import React from 'react'
import { Link } from 'react-router-dom'
const UserDetail = ({user}) => {

  return (
    <div>
        <h1>{user.login}</h1>
        <Link to={user.login}>see more...</Link>
    </div>
  )
}

export default UserDetail