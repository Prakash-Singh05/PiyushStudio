import React from 'react'

import { useState } from "react";
import { Link } from 'react-router-dom';
import Checkbox from './Components/ManuIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed w-full z-50 p-3 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
  <div className="max-w-7xl mx-auto lg:px-8">
    <div className="flex justify-between items-center h-16">
          {/* Left */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-[#EBAA3E] nav-items text-xl">
                {link.name}
              </Link>
            ))}
          </div>
          {/* Logo */}
          <div className="rounded lg:m-auto m-0">
            <img
              src="https://ik.imagekit.io/prakash0522/piyush_logo_transparent.png"
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          {/* Right */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.slice(3).map((link) => (
              <Link key={link.name} to={link.path} className="text-md text-xl hover:text-[#EBAA3E] nav-items">
                {link.name}
              </Link>
            ))}
            {/* Dropdown */}
            {/* <div className="relative group">
              <button className="hover:text-blue-500 ">Pages</button>
              <div className="absolute hidden group-hover:block bg-white shadow mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Features</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
              </div>
            </div> */}
          </div>
          {/* Mobile  Manu Icon*/}
          <Checkbox isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>                               
      {/* Mobile Menu */}
      <div
  className={`lg:hidden fixed top-0 right-0 w-72 h-screen bg-white z-40 shadow-2xl
  transform transition-all duration-500 ease-in-out
  ${isOpen ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-full -translate-y-10 opacity-0"}`}
>
  <div className="flex flex-col justify-center items-center h-full space-y-8 text-center">
    
    {navLinks.map((link) => (
      <Link
        key={link.name}
        href={link.path}
        className="text-2xl font-semibold text-gray-800 hover:text-[#EBAA3E] transition nav-items"
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    ))}

  </div>
</div>
    </nav>
  );
};

export default Navbar;

