import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Scroll = () => {
  const [, setScrollY] = useState(0);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      controls1.set({ x: newScrollY * 0.5 });
      controls2.set({ x: -newScrollY * 0.5 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls1, controls2]);

  const repeatedImages = Array(10).fill(images).flat(); 

  return (
    <div className="flex justify-center w-1/2">
          <div className=" flex flex-col justify-center items-center overflow-hidden bg-white gap-10 py-5 ">
      <motion.div
        id='1'
        className="flex justify-center w-1/2"
        animate={controls1}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {repeatedImages.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="w-24 h-24 mx-10 object-cover" />
        ))}
      </motion.div>
      <motion.div
        id='2'
        className="flex justify-center w-1/2"
        animate={controls2}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {repeatedImages.map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="w-24 h-24 mx-10 object-cover" />
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default Scroll;


