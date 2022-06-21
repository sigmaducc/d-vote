
import { Footer, Navbar } from '../components'
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Admin = () => {
  // const [error ,setError]= useState("");
  return (
    <>
    <Navbar/>
    <div class="gradient-bg-timeline p-4">
  <form class="p-4 bg-white shadow-white  max-w-lg rounded  box mx-auto my-10 border-10">
    <h2 className="mb-3 font-serif text-black text-center">Admin</h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold font-serif mb-2" for="username">
        Username
      </label>
      <input class="  border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold font-serif mb-2" for="password">
        Password
      </label>
      <input class="hover:shadow hover:appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
  &copy;2022 NSA Engineers. All rights reserved.
  </p>
</div>
    <Footer/>
    </>
  )
}

export default Admin
