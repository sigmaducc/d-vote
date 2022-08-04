
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
    <div>
      Admin Panel
    </div>
    <Footer/>
    
    </>
  )
}

export default Admin
