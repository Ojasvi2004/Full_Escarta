import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ settoken }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <nav x-data="{ isOpen: false }" className="relative bg-white shadow  ">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <span className="  text-4xl tracking-wider px-5 font-semibold   max-sm:px-0 max-sm:pr-2 max-sm:text-2xl roboto">
                ESCARTA
              </span>

              <div className="flex lg:hidden">
                <button
                  onClick={() => setisOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={` ${
                isOpen ? " " : "translate-x-full   "
              }  fixed inset-x-0 z-20  px-6 py-4 transition-transform duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <NavLink
                  to={"/add"} onClick={()=>setisOpen(false)}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 "
                >
                  Add Product
                </NavLink>
                <NavLink
                  to={"/itemlist"} onClick={()=>setisOpen(false)}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 "
                >
                  Item List
                </NavLink>
                <NavLink
                  to={"/orderlist"} onClick={()=>setisOpen(false)}
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform  lg:mt-0 "
                >
                  Order List
                </NavLink>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                  onClick={() => settoken("")}
                  type="button"
                  className=" font-bold text-white  tracking-wider flex items-center justify-center  rounded-full bg-slate-800  p-1 px-5"
                  aria-label="toggle profile dropdown"
                >
                  LOG OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
