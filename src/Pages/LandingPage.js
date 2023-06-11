import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Analytics from '../Components/Analytics';
import NewSletter from '../Components/NewSletter';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewSletter/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default LandingPage