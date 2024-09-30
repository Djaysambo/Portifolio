import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div className="bg-circuit-pattern mb-20 flex flex-col sm:flex-row">
        <header className="text-center py-8 flex-shrink-0">
          <img 
            src="/3.jpeg" 
            alt="Vicente Sambo Junior" 
            className="rounded-full mx-auto" 
            width={100} 
            height={300} 
          />
          <h1 className="text-3xl font-bold">Vicente Sambo Junior</h1>
        </header>

        <div className="flex-grow p-4">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center flex-col sm:flex-row">
              <NavLink to="/projectos">
                <button className="bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-4">
                  Projetos
                </button>
              </NavLink>
              <NavLink to="/curriculo">
                <button className="bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">
                  Currículo
                </button>
              </NavLink>
            </div>
            <p className="text-gray-600 mt-8">
              Write a few sentences here to introduce yourself.
            </p>
            <p>
              I am a frontend developer with 3 years of experience.
            </p>
            <p>
              I have a strong background in web development and user experience design.
            </p>
            
            <div className="mt-8 text-gray-600">
              <h2 className="text-2xl font-bold">Contato</h2>
              <ul className="mt-4">
                <li>Email: vicentesambo3@gmail.com</li>
                <li>WhatsApp: (+258) 85 5092 198</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
