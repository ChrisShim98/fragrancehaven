import { useState } from "react";
import { BsSearch, BsCart } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../redux/cartSlice";
import { setSearch } from "../redux/searchSlice";
import { cartAmountParse } from "../helpers/formParser";
import { logout } from "../helpers/parseJWT";
import { scrollToTop } from "../helpers/scrollToTop";

const Navbar = ({ display }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [navOpened, setNavOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const cart = useSelector(selectCart);
  let userLoggedIn = localStorage.getItem("token") !== null;
  let adminCheck =
    localStorage.getItem("role") !== null &&
    localStorage.getItem("role") === "Admin";

  const searchProducts = async () => {
    if (searchWord === "") {
      await dispatch(
        setSearch({
          query: "",
          isActive: false,
        })
      );
    } else {
      await dispatch(
        setSearch({
          query: searchWord,
          isActive: true,
        })
      );
    }
    navigate("/allProducts");
    scrollToTop();
  };

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchProducts();
            }}
            className="flex"
          >
            <input
              type="text"
              onChange={(e) => setSearchWord(e.target.value)}
              className="rounded-l-md h-8 w-[50vw] max-w-[50rem] px-2 outline-1 outline"
              placeholder="Search Products"
            />
            <button
              type="submit"
              className="grid place-content-center bg-undertone text-white h-8 w-8 transition-colors duration-300 rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
            >
              <BsSearch />
            </button>
          </form>
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
        {/* Tablet / Mobile View */}
        <div className="flex lg:hidden items-center gap-8 place-content-end">
          <div
            className="flex lg:hidden"
            onClick={() => {
              setSearchOpened(!searchOpened);
              setNavOpened(false);
            }}
          >
            {searchOpened ? (
              <IoCloseOutline size={"2rem"} />
            ) : (
              <BsSearch size={"1.5rem"} />
            )}
          </div>
          <Link
            onClick={() => {
              setSearchOpened(false);
              setNavOpened(false);
            }}
            to="/cart"
            className="flex relative top-[-1px]"
          >
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
              setSearchOpened(false);
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
            : "w-full bg-gray-100 text-undertone h-0 overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem]"
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
      <div
        className={
          searchOpened
            ? "w-full bg-white h-[6rem] flex justify-center py-8 overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem] shadow-lg"
            : "w-full bg-gray-100 h-0 flex justify-center overflow-hidden duration-1000 absolute top-[4.4rem] md:top-[5.3rem]"
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchProducts();
            setSearchOpened(false);
          }}
          className="flex"
        >
          <input
            type="text"
            onChange={(e) => setSearchWord(e.target.value)}
            className="rounded-l-md h-8 w-[70vw] max-w-[50rem] px-2 outline-1 outline"
            placeholder="Search Products"
          />
          <button
            type="submit"
            className="grid place-content-center bg-undertone text-white h-8 w-8 transition-colors duration-300 rounded-r-md outline outline-1 outline-undertone hover:cursor-pointer hover:bg-primary hover:text-undertone"
          >
            <BsSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
