import React from 'react';
import { NavBar } from './navBar';

export const Header = () => {
  return (
   
      <div className="bg-red-950 text-gray-400 h-1/4 flex items-center justify-between p-4 ">
        <h1 onAnimationStart={AbortController} className="text-2xl font-bold border border-cyan-200 p-2">Djaysambo</h1>
        <NavBar />
      </div>
   
  );
};