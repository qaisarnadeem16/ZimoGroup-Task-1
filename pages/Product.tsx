import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import ProductSlider from './Components/ProductSlider'

const Product = () => {
  return (
   <>
    <div className='lg:px-48 px-5 z-10 absolute w-full h-full'>
         <Navbar/>
         </div>
         <Hero/>
         <div className='lg:px-48 px-5'>
         <ProductSlider/>
         </div>
        <Footer/>
   </>
  )
}

export default Product
