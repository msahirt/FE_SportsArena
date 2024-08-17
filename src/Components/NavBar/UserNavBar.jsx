import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center px-4 py-2 shadow-md">
      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold mr-4">Your Logo</Link>

        {/* Left-side links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/courts" className="hover:text-gray-400">Courts</Link>
          </li>
          <li>
            <Link to="/add-court" className="hover:text-gray-400">Add New Court</Link>
          </li>
        </ul>
      </div>

      {/* Right-side user details */}
      <div className="flex items-center space-x-2">
        <p className="text-sm">John Doe</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 008 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      {/* Hamburger menu for mobile responsiveness */}
      <button className="md:hidden focus:outline-none text-white" id="menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16v12H4zm2-2a2 2 0 10-4 0 2 2 0 004 0z" />
        </svg>
      </button>
    </nav>
  );
}

export default UserNavBar
