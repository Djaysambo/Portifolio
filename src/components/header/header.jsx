import React from 'react'
import { NavBar } from './navBar'

export const Header = () => {
  return (
    <>
      <header className=" items-center justify-between bg-red-950 text-gray-400 h-1/4  text-lg">
        <div  className="text-2xl font-bold border border-cyan-200 p-2">Djaysambo</div>
        <NavBar/>
      </header>
    </>
  )
}

