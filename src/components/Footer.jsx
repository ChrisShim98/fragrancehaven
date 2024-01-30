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
                  <Link
                    to="/aboutUs#about"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutUs#storeLocation"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Store Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutUs#ourPeople"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Our People
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutUs#contactUs"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide">USEFUL LINKS</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Random Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide">FOLLOW US</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-primary"
                  >
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
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex bg-white items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-primary focus:shadow-outline focus:outline-none"
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
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-xl hover:text-primary"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-xl hover:text-primary"
            >
              <FaInstagram />
            </Link>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-xl hover:text-primary"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-teal-accent-400 text-xl hover:text-primary"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
