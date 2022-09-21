import React from 'react'
import { useUserContext } from '../context/userContext';

function Header() {

   const {user,logOut} = useUserContext(); 
   console.log(user);
  return (
    <div>
        <h2>React ContextAPi</h2>
        <div>
            <h3>
                WelCome,{user.name}
                {
                  !user.isGuestUser && (<button onClick={logOut}>Logout</button>)
                }
            </h3>
        </div>
    </div>
  )
}

export default Header