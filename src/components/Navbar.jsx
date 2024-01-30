import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ display }) => {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div
      className={
        display
          ? "w-full z-20 flex flex-col fixed navbar bg-white shadow-md"
          : "w-full z-20 flex flex-col relative"
      }
    >
      <div className="grid grid-flow-col items-center px-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-24 relative left-[-0.8rem]"
        />
        {/* Desktop View */}
        <div className="hidden lg:grid gap-2 mt-[30px] py-2">
          <div className="flex">
            <input
              type="text"
              className="rounded-l-md h-8 w-[50vw] px-2 outline-1 outline"
              placeholder="Search"
            />
            <div className="bg-undertone text-white h-8 w-8 flex place-items-center justify-center rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone">
              <BsSearch />
            </div>
          </div>
          <div className="grid grid-flow-col justify-center items-center gap-8 mr-12 xl:mr-28">
            <Link to="/" className="hover:text-primary hover:cursor-pointer">
              Home
            </Link>
            <p>|</p>
            <Link to="/" className="hover:text-primary hover:cursor-pointer">
              All Products
            </Link>
            <p>|</p>
            <Link
              to="/aboutUs"
              className="hover:text-primary hover:cursor-pointer"
            >
              About Us
            </Link>
            <p>|</p>
            <Link to="/" className="hover:text-primary hover:cursor-pointer">
              FAQs
            </Link>
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
        <div className="flex lg:hidden items-center gap-4 place-content-end">
          <div className="flex">
            <BsCart size={"1.5rem"} />
          </div>
          <div
            className="flex lg:hidden"
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
      </div>
      <div
        className={
          navOpened
            ? "w-full bg-white text-black h-[12rem] overflow-hidden duration-1000 absolute top-24 shadow-lg"
            : "w-full bg-white text-black h-0 overflow-hidden duration-1000 absolute top-24"
        }
      >
        <ul className="lg:hidden gap-2 grid place-items-center text-lg">
          <li
            onClick={() => {
              setNavOpened(false);
            }}
            className="hover:text-primary hover:cursor-pointer"
          >
            Sign In
          </li>
          <Link
            to="/"
            onClick={() => {
              setNavOpened(false);
            }}
            className="hover:text-primary hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => {
              setNavOpened(false);
            }}
            className="hover:text-primary hover:cursor-pointer"
          >
            All Products
          </Link>
          <Link
            to="/aboutUs"
            onClick={() => {
              setNavOpened(false);
            }}
            className="hover:text-primary hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/"
            onClick={() => {
              setNavOpened(false);
            }}
            className="hover:text-primary hover:cursor-pointer"
          >
            FAQs
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
