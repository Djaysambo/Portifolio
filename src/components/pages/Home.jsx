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
                    <img src="/3.jpeg" alt="Vicente Sambo Junior" className="rounded-full" />
             
                  </div>
            <h1 className="text-3xl font-bold ">Vicente Sambo Junior</h1>
             </div>

          <div className="flex-grow p-4">
            <header className="text-center py-8">
           
            </header>

            <div className="container mx-auto px-4 py-8">
              <div className="flex justify-center">
            <a href="/projectos"> <button className="bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">Projetos</button></a>   
            <a href="/curriculo"><button className="ml-4 bg-green-400 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded">Currículo</button></a>    
              </div>
              <p className="text-gray-600 mt-8">
                Write a few sentences here to introduce yourself.</p> 
                <p>
                  I am a frontend developer with 3 years of experience. 
                </p> I have a strong background in web development and user experience design. 
                <p>Currently working as a Frontend Developer at Bytes4future."
              </p>
              <div className="mt-8 text-gr">
                <h2 className="text-2xl font-bold">Contato</h2>
                <ul className="mt-4">
                  <li>Email: vicentesambo3@gmail.com</li>
                  <li>WhatsApp: (+258) 85 5092 198 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}
