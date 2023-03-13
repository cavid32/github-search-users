import React from 'react'
import { useContext } from 'react'
import Context from '../Context'
import UserDetail from './UserDetail';

const Users = () => {

const {state} = useContext(Context);

  return (
    <div>
        {
            state.users.map(user=>(
                <UserDetail key={ user.id}  user={user}/>
            ))
        }
    </div>
  )
}

export default Users