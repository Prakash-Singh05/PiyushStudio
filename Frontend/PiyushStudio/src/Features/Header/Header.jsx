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
  ];

  return (
    <nav className="fixed w-full bg-white shadow z-50 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-evenly items-center h-16">
          {/* Left */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-blue-500">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <h1 className="text-white bg-blue-500 px-4 py-2 rounded font-bold m-auto">
            Piyush Digital Photo Studio
          </h1>

          {/* Right */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.slice(3).map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-blue-500">
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-500">Pages</button>
              <div className="absolute hidden group-hover:block bg-white shadow mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Features</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <Checkbox isOpen={isOpen} toggleMenu={toggleMenu}/>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`lg:hidden px-4 py-4 space-y-2 bg-white shadow transform transition-all duration-500 ease-in ${
    isOpen
      ? "opacity-100 translate-y-0 max-h-96"
      : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
  }`}
>
  {navLinks.map((link) => (
    <Link key={link.name} href={link.path} className="block">
      {link.name}
    </Link>
  ))}
</div>
    </nav>
  );
};

export default Navbar;

