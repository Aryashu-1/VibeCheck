import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  let navbar = ["Home", "About", "Blog", "Login"];
  return (
    <div className="p-9 font-bold">
      <nav className="flex align-center justify-between p-3">
        <div className="mx-70 align-center flex object-contain">
         <div className="flex"> 
          <h1 className="text-center text-white font-bold text-6xl px-2 py-2 font-vibefont">VibeCheck</h1></div>
        </div>
        <ul className="flex justify-center items-center">
          {navbar.map((buttons, index) => (
            <NavLink key={index} className=" text-white mx-9 text-xl rounded-full p-2 text-center hover: curosr-pointer link hover:text-sky-400">{buttons}</NavLink> 
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;