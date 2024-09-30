import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyles = "text-green-300";
  const inactiveStyles = "text-white";

  return (
    <>
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <nav className={`flex-col ${isOpen ? 'flex' : 'hidden'} sm:flex sm:flex-row sm:space-x-6 p-4`}>
        <NavLink 
          to='/' 
          className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} block py-2`} 
          onClick={() => setIsOpen(false)} 
        >
          Home
        </NavLink>
        <NavLink 
          to='/curriculo' 
          className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} block py-2`} 
          onClick={() => setIsOpen(false)}
        >
          Currículo
        </NavLink>
        <NavLink 
          to='/projectos' 
          className={({ isActive }) => `${isActive ? activeStyles : inactiveStyles} block py-2`} 
          onClick={() => setIsOpen(false)}
        >
          Projetos
        </NavLink>
      </nav>
    </>
  );
};
