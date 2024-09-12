import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { Porfile } from '../porfale'
import { NavLink } from 'react-router-dom'


export const Home = () => {
  return (
    <>
      <div className="bg-circuit-pattern">
        <div className="flex">
                  <div className="flex-none w-1/4 p-4  ">
                  <div className='border-sky-400'>
                    <img src="/WhatsApp Image 2024-09-03 at 7.26.46 PM.jpeg" alt="Vicente Sambo Junior" className="rounded-full w-30 h-30 mx-auto" />
             
                  </div>
            <h1 className="text-3xl font-bold">Vicente Sambo Junior</h1>
             </div>

          <div className="flex-grow p-4">
            <header className="text-center py-8">
           
            </header>

            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-center">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Projetos</button>
                <button className="ml-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">Currículo</button>
              </div>
              <p className="text-gray-600 mt-8">
                Write a few sentences here to introduce yourself.</p> 
                <p>
                  For example: "I am a frontend developer with 3 years of experience. 
                </p> I have a strong background in web development and user experience design. 
                <p>Currently working as a Frontend Developer at Bytes4future."
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold">Contato</h2>
                <ul className="mt-4">
                  <li>Email: vicente@example.com</li>
                  <li>WhatsApp: (55) 123 456 7890</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*<footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 Vicente Sambo Junior. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-white mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mr-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </footer>*/}
        <Footer/>
      </div>
    </>
  )
}
