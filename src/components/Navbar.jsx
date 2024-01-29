import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = ({ display }) => {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div
      className={
        display
          ? "w-full z-20 flex flex-col fixed navbar bg-white shadow-md"
          : "w-full z-20 flex flex-col absolute"
      }
    >
      <div className="grid grid-flow-col items-center px-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 relative left-[-0.8rem]"
        />
        {/* Desktop View */}
        <div className="hidden lg:flex">
          <input
            type="text"
            className={
              display
                ? "rounded-l-md h-8 w-[50vw] px-2 outline-1 outline"
                : "rounded-l-md h-8 w-[50vw] px-2"
            }
            placeholder="Search"
          />
          <div
            className={
              display
                ? "bg-undertone text-white h-8 w-8 flex place-items-center justify-center rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
                : "bg-undertone text-white h-8 w-8 flex place-items-center justify-center rounded-r-md hover:cursor-pointer hover:bg-primary hover:text-undertone"
            }
          >
            <BsSearch />
          </div>
        </div>
        <ul className="lg:flex gap-2 hidden place-content-end">
          <li className="hover:text-primary hover:cursor-pointer">Sign In</li>
          <h1 className="flex place-items-center hover:text-primary gap-1 hover:cursor-pointer">
            <BsCart />
            Cart
          </h1>
        </ul>
        {/* Tablet View */}
        <div
          className="place-content-end flex lg:hidden"
          onClick={() => {
            setNavOpened(!navOpened);
          }}
        >
          {navOpened ? (
            <IoCloseOutline size={"2rem"} />
          ) : (
            <RxHamburgerMenu size={"2rem"} />
          )}
        </div>
      </div>
      <div
        className={
          navOpened
            ? "w-full bg-white text-black h-28 overflow-hidden duration-1000"
            : "w-full bg-white text-black h-0 overflow-hidden duration-1000"
        }
      >
        <ul className="lg:hidden gap-2 grid place-items-center py-6">
          <li className="hover:text-primary hover:cursor-pointer text-lg">
            Sign In
          </li>
          <h1 className="flex place-items-center hover:text-primary gap-1 hover:cursor-pointer text-lg">
            <BsCart />
            Cart
          </h1>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
