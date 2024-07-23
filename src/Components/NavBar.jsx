import React, { useState } from 'react';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-gray-300">Home</a>
        </li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Products
          </button>
          {dropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg">
              <li className="border-b">
                <a href="/products/wines" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Wines
                </a>
              </li>
              <li className="border-b">
                <a href="/products/spirits" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Spirits
                </a>
              </li>
              <li>
                <a href="/products/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Accessories
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
