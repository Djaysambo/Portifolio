import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

export const MeusProjectos = () => {
  return (
    <>
      <Header/>
      <div className='font-bold flex m-3'>
         <div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Accusantium repellat,
           aspernatur adipisci saepe aliquam libero optio molestias officiis
           blanditiis recusandae eius aut aperiam nam distinctio voluptatem molestiae in? Eaque, eum.</p>
      </div>
        <img src="public/3.jpeg" alt="" width={100} height={100}/>
      
        </div>
        <div className='font-bold flex m-2'>
          <div >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          
          Eos, rerum. In magni debitis error cum exercitationem, 
           quaerat vitae officia iste repudiandae atque doloribus commodi adipisci amet voluptatem.
          0 Minima, consequatur illum?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          
          Eos, rerum. In magni debitis error cum exercitationem, 
           quaerat vitae officia iste repudiandae atque doloribus commodi adipisci amet voluptatem.
          0 Minima, consequatur illum?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          
          Eos, rerum. In magni debitis error cum exercitationem, 
           quaerat vitae officia iste repudiandae atque doloribus commodi adipisci amet voluptatem.
          0 Minima, consequatur illum?</p>
        </div>
        <img src="public/3.jpeg" alt="" width={200} height={200}/>
      
      
        </div>
        
      <Footer/>
    </>
  )
}
