import React from 'react';
import { NavBar } from './navBar';

export const Header = () => {
  return (
    <>
    <div className="bg-red-950 text-gray-400 flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold border border-green-300 p-2">
        Djaysambo
      </h1>
      <NavBar />
    </div>
    
    </>
    
  );
};
