import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
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

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        id='1'
        className="flex w-1/2"
        initial={{ x: (window.scrollY - (window.innerWidth / 4)) * 0.5 }}
        animate={controls1}
      >
        {images.slice(0, 7).map((img, index) => (
          <img key={index} src={img} alt={`Image ${index}`} className="w-24 h-24" />
        ))}
      </motion.div>
      <motion.div
        id='2'
        className="flex w-1/2"
        initial={{ x: -(window.scrollY - (window.innerWidth / 4)) * 0.5 }}
        animate={controls2}
      >
        {images.slice(6).map((img, index) => (
          <img key={index + 6} src={img} alt={`Image ${index + 6}`} className="w-24 h-24" />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollEffect;
