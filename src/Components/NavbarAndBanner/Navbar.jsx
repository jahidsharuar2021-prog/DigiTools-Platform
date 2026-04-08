import React from 'react';
import strokeimg from "../../assets/Stroke.png"


const Navbar = () => {
    return (
      <div className="max-w-7xl mx-auto mt-6  ">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                  <ul className="p-2">
                    <li>
                      <a>Pricing</a>
                    </li>
                    <li>
                      <a>Testimonials</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-extrabold bg-gradient-to-r  from-purple-500  to-blue-500 bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>
          <div className="navbar-center ">
            <ul className="hidden md:flex cursor-pointer gap-4 font-semibold text-[#101727]">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-3 font-semibold text-[#101727]">
            <img className="cursor-pointer" src={strokeimg} alt="" />
            <p className="cursor-pointer">Login</p>
            <a className=" btn text-[#FFFFFF] bg-gradient-to-r from-purple-500  to-blue-500 rounded-full">
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;