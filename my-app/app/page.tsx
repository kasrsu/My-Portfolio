import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { Application } from '@splinetool/runtime';


// const ArrayDisplay: React.FC = () => {
  //   const [array, setArray] = useState<string[]>(["element1", "element2", "element3"]);
  //   const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  //   useEffect(() => {
    //     // Use setInterval to change the displayed element every second
    //     const intervalId = setInterval(() => {
      //       setCurrentIndex(prevIndex => (prevIndex + 1) % array.length);
      //     }, 1000);
      
      //     // Clean up the interval on component unmount
      //     return () => clearInterval(intervalId);
      //   }, [array]);
      //   return (
        //     <div>
        //       Current Element: {array[currentIndex]}
        //     </div>)
        // }
        
        export default function Home() {
          return (
            <main className="layout grid grid-flow-row grid-cols-5 ">
      
        <section className='hero-section w-screen col-span-5 h-screen flex flex-row align-middle content-center items-center justify-center p-10 '>
          <div className=' justify-center col-span-4 w-1/2'>
            <h1 className=' text-2xl text-white col-span-2 font-bold'>
              I'm Anusara Sri Ravindih
            </h1>
            <h1 className=' text-4xl  opacity-90 font-black'>
            Graphic Designer
            </h1>
            <p className=''>
              I'm a graphic designer based in Bangkok, Thailand. I have a passion for creating clean, modern identities, stylish & beautiful websites, and eye-catching print design.
            </p>
          </div>
          <div className=' align-middle p-24 col-span-2'>
            <img src="next.svg" alt="" className=' w-5/6 ' />
          </div>
        </section>

        <section className=' col-span-5  flex h-screen'>

          <div className='my_details cols-span-3 '>
            <div>
              <h1 className=' text-center text-2xl font-extrabold p-10 text-white'>
                About Me
              </h1>
              <p className=' justify-center text-center'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, saepe aut, ullam ea ad neque consequuntur dolorem aliquid temporibus obcaecati natus, asperiores molestiae ratione nisi accusamus veniam atque hic accusantium.
              </p>
            </div>

          </div>
          <div className='skills col-span-2 p-10'>

            <div className=' skills col-span-2 bg-purple-200 rounded-2xl opacity-20 p-10 '>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at possimus sed nostrum sequi dolorem voluptas! Enim, velit quod commodi id quis eaque nulla eius, tempora deleniti quae sapiente repellat error at illum vero repudiandae rerum modi, praesentium earum natus animi. Sapiente sint error voluptate enim dolores doloremque, alias blanditiis!
              </p>

            </div>
          </div>
        </section>

        <section className='skills col-span-5 flex h-screen items-center justify-center p-10 flex-col'>
          <div>
            <h1 className=' font-extrabold text-2xl'>
              As a positon <button> _Button_ </button>
            </h1>
          </div>
          <div className=' p-10'>
          <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js"></script>
            <spline-viewer loading-anim-type="spinner-small-light" url="https://prod.spline.design/J0o-TTFozYf6Y4JH/scene.splinecode">

            </spline-viewer>
          </div>
          <div>
            <p>
              lorem 50
            </p>
          </div>
        </section>
        <section className='projects col-span-5 flex h-screen items-center  p-10 flex-col'>
          <h1 className='p-10 text-3xl font-extrabold'>
            Works I have done
          </h1>
          <div className=' grid grid-cols-5 gap-5'>
            <div className=' col-span-3 bg-zinc-100 rounded-2xl'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem optio, tempore pariatur autem magni laborum magnam suscipit necessitatibus unde impedit, minus vero. Nemo, excepturi dignissimos? At velit est ipsum.
              </p>
              
            </div>
            <div className=' col-span-2 bg-green-400 rounded-2xl'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sit quae doloribus id consequatur molestias doloremque ducimus necessitatibus, a dolorum officiis laboriosam dolores rerum, reiciendis quo laborum error! Reprehenderit.
              </p>
            </div>
            <div className=' col-span-1 bg-pink-200 rounded-2xl'>
              <p>
                ore placeat nam! Voluptate sit officia, dolor aspernatur excepturi fugiat maxime ex!
              </p>
            </div>
            <div className='col-span-3 bg-purple-400 rounded-2xl'>
              <p>
                Lorem ip Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nihil dolorem quod esse accusamus vero ea quia explicabo molestiae.
              </p>

            </div>
            <div className=' col-span-1 bg-pink-200 rounded-2xl'>
              <p>
                aceat nam! Voluptate sit officia, dolor aspernatur excepturi fugiat maxime ex!
              </p>
            </div>
            <div>

            </div>
          </div>

        </section>
        
      
    </main>
  )
}
