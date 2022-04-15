import React, { useState } from "react";
import "../index.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo36.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gradient-bg-welcome w-full py-3 flex justify-around items-center flex-initial">
      <div className="flex md:w-3/5 md:m-auto md:flex-row justify-between items-center">
        <img className="min-w-max w-36 cursor-pointer" src={logo} alt="logo" />

        <ul className="text-base text-slate-200 md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <li className="cursor-pointer hover:text-[#BBBBBB] mx-4">Home</li>
          <li className="cursor-pointer hover:text-[#BBBBBB] mx-4">
            Admin Login
          </li>
          <li className="border-solid border-2 border-slate-200 bg-transparent py-1 px-2 mx-4 rounded-lg cursor-pointer hover:text-gray-300 hover:border-gray-300">
            User Login
          </li>
        </ul>
      </div>

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
            <li className="min-w-max cursor-pointer ssm:mx-20">Admin Login</li>
            <li className="min-w-max cursor-pointer ssm:mx-20">User Login</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
