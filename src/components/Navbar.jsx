import React, { useState } from "react";
import "../index.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../images/logo36.png";

// const connect = () =>{
//   let provider = window.ethereum;
//   if(typeof provider !=  'undefined'){
//     console.log("I can See Metamask")
//     provider.request({
//       method:'eth_requestAccounts'}).then(accounts=>{
//         console.log(accounts);
//       }).catch(err=>{
//         console.log(err);
//       });
//   }
//   else{alert("Please Install Metamask!")}
// }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gradient-bg-navbar w-full p-6 flex justify-around items-center flex-initial">
      <div className="max-w-[1600px] flex w-11/12 md:m-auto md:flex-row justify-between items-center px-10">
        <Link to={`/`}>
          <img className="min-w-max w-36 cursor-pointer" src={logo} alt="logo" />
        </Link>

        <ul className="text-base text-slate-200 md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <Link to={`/`} class="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">
            Home
          </Link>
          <Link to={`/admin`} class="text-xl cursor-pointer hover:text-[#BBBBBB] mx-4 bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">
            Admin
          </Link>

          <Link to={`/adhaar`} class=" text-xl cursor-pointer hover:text-[#BBBBBB] mx-4  bg-transparent text-white no-underline  font-semibold  py-2 px-4 hover:border   rounded-lg">
            Login
          </Link>
  
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
            <li className="min-w-max cursor-pointer ssm:mx-20">Home</li>
            <li className="min-w-max cursor-pointer ssm:mx-20">Admin Login</li>
            <li className="min-w-max cursor-pointer ssm:mx-20">User Login</li>
          </ul>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
