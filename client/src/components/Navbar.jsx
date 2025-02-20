import React, { useState } from "react";
import { assets } from "../../public/frontend_assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/Context";

const Navbar = () => {
  const { setShowsearch } = useAuth();
  const location = useLocation(); // Get current path

  return (
    <div className="flex flex-row w-full   border-black text-black items-center justify-between p-2 h-[5rem] bg-gray-100">
      {/* Logo */}
      <div>
        <img
          src={assets.logo}
          className="hover:scale-110 transition-all ease-out duration-300 ml-4 cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-row items-center justify-center gap-4 font-bold text-xl">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/collection", label: "Collection" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="flex flex-col items-center justify-between gap-1 hover:scale-110 transition-all ease-out duration-300"
              >
                <p>{item.label}</p>
                <hr
                  className={`w-2/4 h-[2px] bg-gray-700 ${
                    location.pathname === item.path ? "block" : "hidden"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-side Icons & Button */}
      <div className="flex flex-row items-center justify-center gap-4">
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowsearch(true);
          }}
          src={assets.search_icon}
          className="w-auto h-[2.2rem] btn-ghost cursor-pointer p-[0.4rem] hover:scale-110 transition-all ease-out duration-300 rounded "
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className=" m-1">
            <img
              src={assets.profile_icon}
              className="w-auto h-[2.2rem] rounded-full cursor-pointer btn-ghost p-[0.4rem] hover:scale-110 transition-all ease-out duration-300 "
              alt="Profile"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
        <div>
          {" "}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:scale-110 transition-all ease-out duration-300 "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body text-white">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link className="w-full" to={"/cart"}>
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="btn btn-outline border-2 hover:text-black font-bold transition-all ease-out hover:scale-110 btn-accent">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
