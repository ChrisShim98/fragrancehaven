import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-undertone text-white">
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
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/allProducts" className="link">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
                    Random Product
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link">
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
                type="submit"
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
          <p className="text-sm">
            © Copyright 2024 Fragrance Haven. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-xl">
            <Link to="/" className="link">
              <FaTwitter />
            </Link>
            <Link to="/" className="link">
              <FaInstagram />
            </Link>
            <Link to="/" className="link">
              <FaFacebookSquare />
            </Link>
            <Link to="/" className="link">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
