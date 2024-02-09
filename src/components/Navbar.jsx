import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import { cartAmountParse } from "../helpers/formParser";
import { logout } from "../helpers/parseJWT";

const Navbar = ({ display }) => {
  const [navOpened, setNavOpened] = useState(false);
  const cart = useSelector(selectCart);
  let userLoggedIn = localStorage.getItem("token") !== null;
  let adminCheck =
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") === "Admin";

  return (
    <div
      className={
        display
          ? "w-full z-20 flex flex-col fixed navbar bg-white shadow-md"
          : "w-full z-20 flex flex-col relative"
      }
    >
      <div className="grid grid-flow-col items-center px-6 py-1">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-16 md:h-20 lg:h-24 relative left-[-0.5rem] pr-8"
        />
        {/* Desktop View */}
        <div className="hidden lg:grid gap-2 mt-[30px] py-2 justify-center">
          <div className="flex">
            <input
              type="text"
              className="rounded-l-md h-8 w-[50vw] max-w-[50rem] px-2 outline-1 outline"
              placeholder="Search"
            />
            <div className="grid place-content-center bg-undertone text-white h-8 w-8 transition-colors duration-300 rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone">
              <BsSearch />
            </div>
          </div>
          <div className="grid grid-flow-col font-medium justify-center items-center gap-8">
            <Link to="/" className="link">
              Home
            </Link>
            <p>|</p>
            <Link to="/allProducts" className="link">
              All Products
            </Link>
            <p>|</p>
            <Link to="/aboutUs" className="link">
              About Us
            </Link>
            <p>|</p>
            <Link to="/faqs" className="link">
              FAQs
            </Link>
          </div>
        </div>

        <ul className="lg:flex gap-4 font-medium hidden place-content-end">
          <Link
            to={
              adminCheck
                ? "./adminDashboard"
                : userLoggedIn
                ? "/myAccount"
                : "/signIn"
            }
            className="link"
          >
            {adminCheck
              ? "Admin Dashboard"
              : userLoggedIn
              ? "My Account"
              : "Sign In"}
          </Link>
          <Link
            to="/cart"
            className="flex place-items-center gap-1 link relative"
          >
            <BsCart />
            <p
              className={
                cart.length > 0
                  ? "absolute top-[-4px] left-[-8px] text-xs bg-primary font-medium rounded-full px-1 w-4 h-4 flex items-center justify-center"
                  : "hidden"
              }
            >
              {cartAmountParse(cart)}
            </p>
            Cart
          </Link>
          {userLoggedIn && (
            <button
              className="link"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          )}
        </ul>
        {/* Tablet View */}
        <div className="flex lg:hidden items-center gap-4 place-content-end">
          <Link to="/cart" className="flex relative">
            <BsCart size={"1.5rem"} />
            <p
              className={
                cart.length > 0
                  ? "absolute top-[-4px] left-[-8px] text-xs bg-primary font-medium rounded-full px-1 w-4 h-4 flex items-center justify-center"
                  : "hidden"
              }
            >
              {cartAmountParse(cart)}
            </p>
          </Link>
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
          navOpened && userLoggedIn
            ? "w-full bg-white text-undertone h-[14rem] overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem] shadow-lg"
            : navOpened
            ? "w-full bg-white text-undertone h-[12rem] overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem] shadow-lg"
            : "w-full bg-white text-undertone h-0 overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem]"
        }
      >
        <ul className="lg:hidden gap-2 grid place-items-center text-lg font-medium">
          <Link
            to="/"
            onClick={() => {
              setNavOpened(false);
            }}
            className="link"
          >
            Home
          </Link>
          <Link
            to={
              adminCheck
                ? "./adminDashboard"
                : userLoggedIn
                ? "/myAccount"
                : "/signIn"
            }
            onClick={() => {
              setNavOpened(false);
            }}
            className="link"
          >
            {adminCheck
              ? "Admin Dashboard"
              : userLoggedIn
              ? "My Account"
              : "Sign In"}
          </Link>
          <Link
            to="/allProducts"
            onClick={() => {
              setNavOpened(false);
            }}
            className="link"
          >
            All Products
          </Link>
          <Link
            to="/aboutUs"
            onClick={() => {
              setNavOpened(false);
            }}
            className="link"
          >
            About Us
          </Link>
          <Link
            to="/faqs"
            onClick={() => {
              setNavOpened(false);
            }}
            className="link"
          >
            FAQs
          </Link>
          {userLoggedIn && (
            <button
              className="link"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
