import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const activeStyles = "text-green-300";
  const inactiveStyles = "text-white";


  return (
    <>
    <nav className='space-x-6 '>
        <NavLink to ='/' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Home</NavLink>
        <NavLink to ='/curriculo' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Currículo</NavLink>

        <NavLink to ='/projectos' className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`}>Porjetos</NavLink>
    </nav>
    </>
  )
}

