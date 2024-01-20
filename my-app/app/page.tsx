'use client';
import Image from 'next/image'
import React, { createContext ,useState, useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import {delay, motion, useAnimation, useInView } from 'framer-motion';
import ImageSlider from '@/components/imagesliider';
// import { SplineViewer } from '@splinetool/viewer';
import work1 from '@/public/work1.jpg';
import work2 from '@/public/work2.jpg';
import work3 from '@/public/work3.jpg';
import work4 from '@/public/work4.jpg';

const images = [
  '/work1.jpg',
  '/work2.jpg',
  '/work3.jpg',
  '/work4.jpg',

];




        export default function Home() {
          return (
            <main className="layout grid grid-flow-row grid-cols-5 ">
      
        <section className='hero-section w-screen col-span-5 h-screen flex flex-row align-middle content-center items-center justify-center p-10 '>
          <div className=' justify-center col-span-4 w-1/2'>
            <motion.h1
             variants={{
              hidden:{opacity:0 , y:50},
              vissible:{opacity:1 , y:0}
             }}
             initial ='hidden'
             animate='vissible'
             transition={{duration:0.5, delay:0}}
             className=' text-4xl text-red-200 col-span-2 font-bold '>
              I'm Anusara Sri Ravindih
            </motion.h1>
            <h1 className=' text-7xl  opacity-90 font-black'>
            Graphic Designer
            </h1>
            <p className=' text-xl pt-10'>
              I'm a graphic designer based in Bangkok, Thailand. I have a passion for creating clean, modern identities, stylish & beautiful websites, and eye-catching print design.
            </p>
          </div>
          <div className=' align-middle p-24 col-span-2'>
            <img src="next.svg" alt="" className=' w-5/6 ' />
          </div>
        </section>

        <section className='col-span-5 p-10 gap-5 flex h-screen'>
          <div className=' relative grid grid-cols-5 gap-3 h-1/2'>
          <div className='my_details col-span-2 '>
            <div className=' bg-pink-800 rounded-2xl relative h-full '>
              <h1 className=' text-center text-4xl font-extrabold p-10 text-white'>
                About Me
              </h1>
              <p className=' p-5 justify-center text-center'>
                Lorem ipsum, sakljdfkajfskljdlkjfsdklfjkdjkfjkjdflk;sajflk;dkjfkldjskfjlkdfjkjjsdlkjfklsdjklf jkldsjfkljdskljfkl jkld kdjfksf kdlsjfksldfjksljfkdsjfklsjdkfjdklsjfkldsfjkjskldfjkdklsjfksdjdolor sit amet consectetur adipisicing elit. Harum, saepe aut, ullam ea ad neque consequuntur dolorem aliquid temporibus obcaecati natus, asperiores molestiae ratione nisi accusamus veniam atque hic accusantium fkljdzkjfkj kjfkldjsklfj dkjfkldjfsl  skdjkfljdls .
              </p>
            </div>

          </div>
          <div className='positions col-span-3 h-full relative '>

            <div className=' relative skills col-span-2 shadow-3xl bg-purple-500 rounded-2xl p-10 h-full'>
              <h1 className=' align-middle text-center justify-center pb-5 font-extrabold text-2xl'>
                My position
              </h1>
              <p className='text-center' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at possimus sed nostrum sequi dolorem voluptas! Enim, velit quod commodi id quis eaque nulla eius, tempora deleniti quae sapiente repellat error at illum vero repudiandae rerum modi, praesentium earum natus animi. Sapiente sint error voluptate enim dolores doloremque, alias blanditiis!
              </p>

              </div>    
            </div>
          </div>
        </section>

        <section className='skills col-span-5 flex h-screen items-center justify-center p-5 flex-col'>
          <div>
            <h1 className=' font-extrabold text-2xl'>
              As a positon <button> _Button_ </button>
            </h1>
          </div>
          <div className=' p-5'>
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
          <h1 className='p-10 text-3xl font-extrabold pb-10'>
            Works I have done
          </h1>
          <div className=' grid grid-cols-5 gap-3 '>
            <div className=' col-span-3 bg-purple-600 backdrop-blur drop-shadow-lg p-5 rounded-2xl'>
              <h1 className=' font-extrabold text-2xl text-center pb-5'>
                Card Project 
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem optio, tempore pariatur autem magni laborum magnam suscipit necessitatibus unde impedit, minus vero. Nemo, excepturi dignissimos? At velit est ipsum.
              </p>
              <div className=''>
                <ImageSlider images={images} />
              </div>
            </div>

            {/* next */}
            <div className=' col-span-2 flex flex-col space-y-5 rounded-2xl'>
              <div className='bg-green-200 rounded-2xl h-1/2'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sit quae doloribus id consequatur molestias doloremque ducimus necessitatibus, a dolorum officiis laboriosam dolores rerum, reiciendis quo laborum error! Reprehenderit.
                </p>
              </div>
              <div className='bg-red-200 rounded-2xl h-1/2'>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sit quae doloribus id consequatur molestias doloremque ducimus necessitatibus, a dolorum officiis laboriosam dolores rerum, reiciendis quo laborum error! Reprehenderit.
              </p>
              </div>

            </div>
             {/* next */}
            <div className=' col-span-1  p-5 bg-pink-200 rounded-2xl'>
              <p>
                ore placeat nam! Voluptate sit officia, dolor aspernatur excepturi fugiat maxime ex!
              </p>
            </div>
            <div className='col-span-3  p-5 bg-purple-400 rounded-2xl'>
              <p>
                Lorem ip Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nihil dolorem quod esse accusamus vero ea quia explicabo molestiae.
              </p>

            </div>
            <div className=' col-span-1  p-5 font-black  bg-pink-200 rounded-2xl'>
              <p className=' opacity-100 '>
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
