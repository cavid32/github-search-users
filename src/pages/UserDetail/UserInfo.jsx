import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
  const {login} = useParams()
  console.log(login)

  const [user, setUser] = useState({})

useEffect(() => {
   fetch(`https://api.github.com/users/${login}`)
   .then(res => res.json())
   .then(res => setUser(res))
  },[])
  return (
    <div>
<h1>{user.login}</h1>
<h1>Followers: <span>{user.followers}</span></h1>
        
    </div>
  )
}

export default UserDetail