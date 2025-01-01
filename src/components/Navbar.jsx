import React from 'react';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

function Navbar() {

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Portfolio
        </h1>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
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
    </nav>
  );
}

export default Navbar;
