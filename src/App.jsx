import React from 'react'
import HeroSection from './Pages/HeroSection'
import About from './Pages/About'
import HorizontalScrollSection from './Pages/HorizontalScroll'
import Herbal from './Pages/Herbal'
import Product from './Pages/Product'
import SkinPack from './Pages/SkinPack'
import TestimonialCarousel from './Pages/TestimonialCarousel'
import AvailableOn from './Pages/ AvailableOn' 
import FAQAccordion from './Pages/FAQAccordion'
import Footer from './Pages/Footer'
import Usp from './Pages/USp'

const App = () => {
  return (
    <div>
      <HeroSection />
      <About />
       <HorizontalScrollSection />
     <Usp />
       <Herbal />
       <Product />
       <SkinPack />
       <AvailableOn />
       <TestimonialCarousel />
       <FAQAccordion />
       <Footer />
       
    </div>
  )
}

export default App