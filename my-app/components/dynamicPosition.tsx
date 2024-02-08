import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PositionChanger: React.FC = () => {
  const positions: string[] = ['Graphic Designer', 'Web Designer', 'Data Science Student', 'Tutor'];
  const [currentPositionIndex, setCurrentPositionIndex] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<string>('');
  const [typingInProgress, setTypingInProgress] = useState<boolean>(true);

  useEffect(() => {
    if (typingInProgress) {
      let currentIndex = 0;
      const position = positions[currentPositionIndex];
      const typingInterval = setInterval(() => {
        setCurrentPosition((prevPosition) => prevPosition + position[currentIndex]);
        currentIndex++;
        if (currentIndex === position.length) {
          clearInterval(typingInterval);
          setTypingInProgress(false);
          setTimeout(() => {
            setCurrentPosition('');
            setCurrentPositionIndex((prevIndex) => (prevIndex + 1) % positions.length);
            setTypingInProgress(true);
          }, 2000); // Wait for 2 seconds before changing to the next position
        }
      }, 100); // Typing speed, adjust as needed

      return () => clearInterval(typingInterval);
    }
  }, [currentPositionIndex, positions, typingInProgress]);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          key={currentPosition}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentPosition}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PositionChanger;
