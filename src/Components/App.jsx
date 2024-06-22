import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import styled, {  css } from "styled-components";


function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="uppercase font-extrabold text-xl py-10 whitespace-nowrap" style={{ x }}>
        <span className="flex">{children}</span>
      </motion.div>
    </div>
  );
}

export default function App() {
  const images = [
    "./images/react.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
    "https://avatars.githubusercontent.com/u/47703742?s=200&v=4",
    "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
  
  ];
  const repeatedImages = Array(5).fill(images).flat(); 

  const Marquee = styled.div`
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 7%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

  return (
    <Marquee className="container m-auto p-10 ">
        <div className="flex justify-center mb-10 ">
          <span className="flex flex-col  items-center justify-center">
          <h1 className="text-5xl font-bold p-5">Tools and Stack</h1>
          <p className="text-xl p-3">These are some of the stacks and tools that I often use </p>
          </span>
        </div>

        <div className="flex flex-wrap">
          <ParallaxText baseVelocity={-5}>
            {repeatedImages.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index}`} className="w-24 h-24 mx-10 object-cover" />
            ))}
          </ParallaxText>
          <ParallaxText baseVelocity={5}>
            {repeatedImages.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index}`} className="w-24 h-24 mx-10 object-cover" />
            ))}
          </ParallaxText>
        </div>
    </Marquee>
  );
}






