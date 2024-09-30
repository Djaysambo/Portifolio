import React from 'react'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
import { Home } from './Home'

export const MeusProjectos = () => {
  return (
    <>
      <Header className='static'/>
      <div className=' float-start justify-start'>
        <Home/>
        <Home/>
      </div>
      <Footer/>
    </>
  )
}
