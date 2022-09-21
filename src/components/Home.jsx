import React from 'react'
import { useUserContext } from '../context/userContext'

function Home() {
  const {user,logOut}= useUserContext()
  return (
    <div>
        <h3>You are loggind in as,{user.name} </h3>
        {
                  !user.isGuestUser && (<button onClick={logOut}>Logout</button>)
        }
    </div>
  )
}

export default Home