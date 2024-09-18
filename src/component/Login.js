import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn, setSignIn]=useState(true);
  const toggleSignInForm=()=>{
    setSignIn(!isSignIn);

  };

  return (
    <div>
      <div className='absolute'>
      <Header/>
    
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="" />
      </div>
      <form className=' absolute bg-black w-3/12 p-12 mt-36 mx-auto right-0 left-0 bg-opacity-80'>
       <h1 className='text-white pb-4 text-3xl font-bold'> {isSignIn ? "Sign In" : "Sign Up" }</h1>
               {!isSignIn && <input type="text"  placeholder=' Full Name' className='p-3 my-2 border-2  bg-black bg-opacity-5 w-full '/>}
                <input type="text"  placeholder='Email or mobile number' className='p-3 my-2 border-2  bg-black bg-opacity-5 w-full '/>
                <input type="text"  placeholder='Password' className='p-3 my-2   border-2  bg-black bg-opacity-5  w-full'/>
         <button className='p-2 my-2   bg-red-600 text-white  w-full '>{isSignIn ? "Sign In" : "Sign Up" }</button>
         <p className='text-white cursor-pointer' onClick={toggleSignInForm}>New to Netflix? Sign up now</p>
          
         
      </form>
      
    
    </div>
  );
};

export default Login;