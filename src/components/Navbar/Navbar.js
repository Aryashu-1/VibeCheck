import React from "react";


const Navbar = () => {
  /* let navbar = ["Home", "About", "Blog", "Login"]; */
  return (
    <div>
      <nav className="bg-blue-700 flex align-center justify-between p-3 text-center">
        <div className="mx-70 align-center flex object-contain">
         <div className="flex"> <img className="w-10 flex rounded-full object-fill" src='https://media.springernature.com/w580h326/nature-cms/uploads/collections/NEEA_Collection_page_image-5c8544db326622d69da830c7f42dc68e.jpg' alt=''></img>
          <h1 className="text-center font-bold text-lg px-2 py-2">SHMR</h1></div>
        </div>
        <ul >
          {/* {navbar.map((buttons, index) => (
            <NavLink key={index} className="bg-white text-blue-700 mx-4  rounded-full p-2 text-center hover: curosr-pointer border-cyan-500 link">{buttons}</NavLink> 
          ))} */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;