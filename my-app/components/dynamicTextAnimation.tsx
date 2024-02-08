import React from 'react';
import { useSpring, animated } from 'react-spring/web';
import { animated } from '@react-spring/web'

const DynamicTextAnimations: React.FC = () => {
  // Define the animations for each text element
  const textAnimations = [
    useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' } }),
    useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' } }),
    useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' } }),
    useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' } }),
    useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(-20px)' } })
  ];

  // Text content for each element
  const texts: string[] = ["Graphic Designer", "Web Developer", "Web Designer", "Tutor", "Data Science Student"];

  return (
    <div>
      {texts.map((text, index) => (
        <animated.div key={index} style={textAnimations[index]} className="animated-text">
          {text}
        </animated.div>
      ))}
    </div>
  );
};

export default DynamicTextAnimations;
