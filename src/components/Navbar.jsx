import React, { useState } from "react";
import "../index.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../images/logo36.png";




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let admin = "0xdb052d7f3f1ae52cbe01aa60f8a1bd01418e1737"
  let a = ()=>{
    let data = JSON.parse(sessionStorage.getItem('admin'));
    console.log(data[0])
    if(admin===data[0] || data===null){
      window.location="admin"
    }
    else alert("You don't have admin priveleges ")
  }
  return (
    <nav className="gradient-bg-navbar w-full p-6 flex justify-around items-center flex-initial">
      <div className="max-w-[1600px] flex w-11/12 md:m-auto md:flex-row justify-between items-center px-10">
        <Link to={`/`}><img className="min-w-max w-36 cursor-pointer" src={logo} alt="logo" /></Link>

        <ul className="text-base text-slate-200 md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <Link to={`/`} className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">Home</Link>
          <Link to={`/aadhaar`} className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">Voter</Link>
          <div onClick={a}  className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg ">Admin</div>
          <Link to={`/about`} className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4 bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">About</Link>


        </ul> 
      
      </div>

      {/* For Mobile phone */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer "
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[50vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
            
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            
            <Link to={`/`} className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">Home</Link>
            <Link to={`/admin`} className="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4 bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">Admin</Link>
            <Link to={`/adhaar`} className=" text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">Login</Link>
          
          </ul>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
