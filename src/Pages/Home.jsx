import NavDaisy from "../Components/NavDaisy";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ScrollEffect from "../Components/ScrollEffect";

import React from 'react'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ScrollEffect/>
    <Hero/>
    
    <Footer/>
    </>
  )
}
