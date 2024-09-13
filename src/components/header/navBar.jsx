import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const activeStyles = "text-red-500";
  const inactiveStyles = "text-white";


  return (
    <>
    <nav className='space-x-6 '>
        <NavLink to ='/' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Home</NavLink>

        <NavLink to ='/contactos' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Contactos</NavLink>

        <NavLink to ='/sobre-nos' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Portifolio</NavLink>
    </nav>
    </>
  )
}

