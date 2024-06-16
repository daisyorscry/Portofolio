import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import NavbarTesting from '../Components/NavbarTesting';

import { motion } from 'framer-motion';

export default function Layout() {
  return (
    <>
      <motion.div
        className=" "
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {/* <Navbar /> */}
        {/* <NavbarTesting /> */}
        {/* < Hero/>
        <Footer/> */}
        
      </motion.div>
    </>
  );
}
