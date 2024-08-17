import React, {useState} from 'react'
import axios from 'axios'

const SignUp = ({setBoxType}) => {

  const [signupData, setsignupData] = useState({})

  const [error, setError] = useState(null)

  const handleChange = (e)=>{
    setsignupData({...signupData,[e.target.name]:e.target.value})
    console.log(signupData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if(signupData.password===signupData.confirmPassword){
      try {
        await axios.post(`http://localhost:3000/api/v1/user/signup`, signupData
        ).then(((res)=>{
        console.log(res.data)
        alert(res.data)
        setBoxType('login')
        }))
      } catch (e) {
        if(e.res.message){
          setError(e.res.message)
        }
      }
    }
  }

  return (
    <div>
      <div className="bg-[#0e387a] h-screen mx-auto'">
        <h1 className='text-center text-3xl text-[#9fafca] hover:text-[#b8df10] font-extrabold pt-10 pb-10'>Sign Up</h1>
          {error ?(<div>{error}</div>):('')}
          <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col pt-10">
              <label htmlFor="firstName" className="text-white">First Name</label>
              <input type="text"  className="border-none mb-3 rounded-md" name={'firstName'} value={signupData.firstName} onChange={handleChange} />
              <label htmlFor="lastName" className="text-white">Last Name</label>
              <input type="text"  className="border-none mb-3 rounded-md" name={'lastName'} value={signupData.lastName} onChange={handleChange} />
              <label htmlFor="email" className="text-white">Email</label>
              <input type="email"  className="border-none mb-3 rounded-md" name={'email'} value={signupData.email} onChange={handleChange} />
              <label htmlFor="mobNumber" className="text-white">Mobile Number</label>
              <input type="number"  className="border-none mb-3 rounded-md" name={'mobileNumber'} value={signupData.mobileNumber} onChange={handleChange} />
              <label htmlFor="password" className="text-white">Password</label>
              <input type="password"  className="border-none mb-3 rounded-md" name={'password'} value={signupData.password} onChange={handleChange} />
              <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
              <input type="password"  className="border-none mb-3 rounded-md" name={'confirmPassword'} value={signupData.confirmPassword} onChange={handleChange} />

              <button type="submit" className="rounded-full text-lg leading-4 font-medium bg-blue-500 hover:bg-sky-700 h-8 mt-5 text-white" onClick={handleSubmit}>Sign Up</button>


            </div>
            <p>Already a member? <i onClick={()=>setBoxType('login')}>Sign In here</i> </p>
          </form>
      </div>

    </div>
  )
}

export default SignUp
