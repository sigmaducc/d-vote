
import { Footer, Navbar } from '../components'
import {React,useState} from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';

import { emblem } from '../../images';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";








const AdminLogin = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signIn = ()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  
  
  // const [error ,setError]= useState("");
  return (
  <>
    <Navbar/>
    <div className="gradient-bg-timeline p-4">
      <form className="p-4 bg-white shadow-white  max-w-xl rounded  box mx-auto my-10 border-10">
        <div className="grid grid-cols-2 gap-4">

          {/* <h2 className="mb-3 font-serif text-black text-center">Admin</h2> */}
          
          <div className='text- font-bold text-center p-10 rounded-lg row-span-2'>
            <img src={emblem} className='scale-150 transform-gpu py-12 mx-auto' alt='emblem'/>
          </div>
          
          
          <div className="p-3 mt-10">
            {/* UserName */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-bold font-serif mb-2">Username</label>
              <input className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:shadow  focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
              value = {email}
              onChange = {(e)=> setEmail(e.target.value)}
              />
            </div>
          
            {/* Password  */}
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-bold font-serif mb-2">Password</label>
              <input className="hover:shadow hover:appearance-none border border-red-500 rounded w-full 
              py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************"
              value = {password}
              onChange = {(e)=> setPassword(e.target.value)}
              />
              {/* Error */}
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
        

            {/* Button */}
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded 
              focus:outline-none focus:shadow-outline" onClick={signIn}> Sign In </button>
            </div>


            <div className="inline-block align-baseline font-bold text-sm text-blue-500 ml-24
            hover:text-blue-800" href="#"> Forgot Password?</div>


          </div>
        
          </div>
      </form>
      <p className="text-center text-gray-500 text-xs"> &copy;2022 NSA Engineers. All rights reserved. </p>

      </div>
  
    <Footer/>
  </>
  )
}

export default AdminLogin
