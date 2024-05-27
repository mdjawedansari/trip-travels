// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Drawer from './Drawer';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
  };

  const activeClassName = "text-green-500 underline inline-flex items-center px-1 pt-1 text-md font-medium";

  return (
    <>
    <nav className=" fixed top-6 w-full z-20">
      <div className="max-w-screen-xl rounded-lg ml-4 mr-4 sm:ml-4 sm:mr-4 bg-white shadow-xl  mx-auto lg:mx-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center">

            {/* logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-3xl font-bold hover:font-bold hover:text-blue-500 text-black">
                Trippy
              </NavLink>
            </div>
            <div className="sm:hidden pr-8 ml-52">
            {isOpen && isOpen ? (
              <RxCross2 onClick={() => setIsOpen(false)} className={` w-10 h-10 p-2 hover:bg-gray-600 hover:text-gray-100  hover:rounded`} />
            ) : (
              <CiMenuFries onClick={toggleDropdown} className="w-10 h-10 p-2 hover:bg-gray-600 hover:text-gray-100 hover:rounded" />
            )}
            </div>

            {/* nav items */}
            <div className="hidden w-full sm:-my-px sm:ml-6  md:ml-96 transition-all ease-in-out duration-500 md:gap-6 sm:flex sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-gray-500 hover:text-green-500 hover:underline inline-flex items-center px-1 pt-1 text-md font-medium"
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-gray-500 hover:text-green-500 hover:underline inline-flex items-center px-1 pt-1 text-md font-medium"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-gray-500 hover:text-green-500 hover:underline inline-flex items-center px-1 pt-1 text-md font-medium"
                }
              >
                Service
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? activeClassName
                    : "text-gray-500 hover:text-green-500 hover:underline inline-flex items-center px-1 pt-1 text-md font-medium"
                }
              >
                Contact
              </NavLink>
            </div>
            
          </div>

          {/* login button  */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavLink
              to="/login"
              className="bg-black text-white hover:text-white
               hover:bg-green-500 px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    {isOpen && <Drawer setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
