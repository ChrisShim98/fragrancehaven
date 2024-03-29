import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scrollToTop } from "../helpers/scrollToTop";

const Footer = () => {
  return (
    <div className="bg-undertone text-white mt-auto">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6 gap-8 lg:gap-4">
          <div className="grid grid-cols-2 gap-4 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-medium tracking-wide">About Us</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link to="/aboutUs#about" className="link">
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs#storeLocation" className="link">
                    Store Location
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs#ourPeople" className="link">
                    Our People
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs#contactUs" className="link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide">USEFUL LINKS</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li onClick={() => scrollToTop()}>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li onClick={() => scrollToTop()}>
                  <Link to="/allProducts" className="link">
                    All Products
                  </Link>
                </li>
                <li onClick={() => scrollToTop()}>
                  <Link to="/myAccount" className="link">
                    My Account
                  </Link>
                </li>
                <li onClick={() => scrollToTop()}>
                  <Link to="/faqs" className="link">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide">FOLLOW US</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link to="/" className="link">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                name="email"
                autoComplete="true"
                placeholder="Email"
                required=""
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 text-undertone bg-white rounded-lg md:mr-2 md:mb-0"
              />
              <button
                type="reset"
                className="btn btn-light h-12 px-6 font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm">
              Join Fragrance Haven's newsletter for exclusive scents, insider
              tips, and irresistible offers. Elevate your senses with us!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <div>
            <p className="text-sm">
              © Copyright 2024 Fragrance Haven. All rights reserved.
            </p>
            <p className="text-sm pt-2">By Christopher Shim 2024</p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-xl sm:pt-2">
              <a
                href="https://github.com/ChrisShim98"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/christopher-shim-bsc/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
