import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const ArrayDisplay: React.FC = () => {
  const [array, setArray] = useState<string[]>(["element1", "element2", "element3"]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // Use setInterval to change the displayed element every second
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % array.length);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [array]);
  return (
    <div>
      Current Element: {array[currentIndex]}
    </div>)
}

export default function Home() {
  return (
    <main className="">
      <div className='layout grid grid-flow-col grid-cols-5'>

        <section className='hero-section col-span-5 w-screen h-screen flex flex-col justify-center p-10'>
          <h1 className=' text-4xl font-extrabold'>
            I'm Anusara Sri Ravindih
          </h1>
          <h1 className=' text-6xl'>
          Current Element: {array[currentIndex]}

          </h1>
        </section>
        
      </div>
    </main>
  )
}
