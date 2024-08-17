import React, { useState } from 'react'
import UserNavBar from '../Components/NavBar/UserNavBar'
import SignIn from '../Components/User/SignIn'
import SignUp from '../Components/User/SignUp.jsx'


const HomePageLayOut = () => {

  const [boxType,setBoxType] = useState('login')

  return (
    <div>

      <div>
        {/* <h3>
          {boxType==='login'? 'Login' : 'Signup'}
        </h3> */}
        {boxType==='login' ? <SignIn setBoxType={setBoxType}/>: <SignUp setBoxType={setBoxType}/>}
      </div>
      {/* <UserNavBar/>
      <div>
        <SignIn/>
      </div> */}
    </div>
  )
}

export default HomePageLayOut
