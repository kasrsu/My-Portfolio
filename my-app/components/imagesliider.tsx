// components/ImageSlider.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '180',
    afterChange: (index: number) => setCurrentSlide(index),
  };
 
  
const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  Transition: { duration: 0.5 },
};

  return (
    <Slider {...settings} className="flex items-center justify-center">
      {images.map((imageUrl, index) => (
        <div key={index} className="flex items-center justify-center">
          <motion.img
           initial="initial"
           animate="animate"
           exit="exit"
           variants={slideIn}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className={`w-80 h-auto items-center justify-center pt-1}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;