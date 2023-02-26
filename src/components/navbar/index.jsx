import React from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import Logo from './Logo.png'

const Navbar = () => {
  return (
    <div className="w-screen h-16 fixed grid grid-flow-col bg-dark text-light place-items-center z-20">
      <img src={Logo} alt="Logo" className="h-16 py-1" />
      <div className="flex">
        <input type="text" className="rounded-l-md h-8 w-[50vw] text-dark px-2" placeholder="Search" />
        <div
          className="bg-accent h-8 w-8 flex place-items-center justify-center rounded-r-md
                hover:cursor-pointer hover:bg-[#fff6f6] hover:text-[#202020]"
        >
          <BsSearch />
        </div>
      </div>
      <ul className="md:flex gap-2 hidden">
        <li>Sign In</li>
        <h1 className="flex place-items-center"><BsCart />Cart</h1>    
      </ul>
    </div>
  );
};

export default Navbar;
