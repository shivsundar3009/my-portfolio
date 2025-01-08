import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Portfolio
        </h1>

        {/* Hamburger Icon for smaller devices */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links for medium screens and larger */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-lg">
          <ul className="flex flex-row justify-evenly text-gray-900 dark:text-white">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                className="cursor-pointer hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
