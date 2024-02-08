'use client';
import Image from 'next/image'
import React, { createContext ,useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import {delay, motion, useAnimation, useInView } from 'framer-motion';
import ImageSlider from '@/components/imagesliider';
// import { SplineViewer } from '@splinetool/viewer';
import ImageScroller from '@/components/imageScrollerCard';
import PositionChanger from '@/components/dynamicPosition';

import work1 from '@/public/work1.jpg';
import work2 from '@/public/work2.jpg';
import work3 from '@/public/work3.jpg';
import work4 from '@/public/work4.jpg';
import ImageScrollerDuothan from '@/components/imageScrollerDuothan';
import ImageScrollerManthra from '@/components/imageScrollerManthra';
import DynamicTextAnimations from '@/components/dynamicTextAnimation';

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
            
            <PositionChanger/>    
            <p className=' text-xl pt-10'>
              I'm a graphic designer based in Bangkok, Thailand. I have a passion for creating clean, modern identities, stylish & beautiful websites, and eye-catching print design.
            </p>
          </div>
          <div className=' align-middle p-24 col-span-2'>
            <img src="next.svg" alt="" className=' w-5/6 ' />
          </div>
        </section>

        <section className='col-span-5 p-10 gap-5 flex h-screen'>
          <div className=' relative grid grid-cols-5 gap-4 h-1/2'>
          <div className='my_details col-span-2 '>
            <div className=' shadow-2xl bg-opacity-30 bg-red-400 rounded-2xl relative h-full '>
              <h1 className=' text-center text-4xl font-extrabold p-10 text-white'>
                About Me
              </h1>
              <p className=' p-5 justify-center text-center'>
                Lorem ipsum, sakljdfkajfskljdlkjfsdklfjkdjkfjkjdflk;sajflk;dkjfkldjskfjlkdfjkjjsdlkjfklsdjklf jkldsjfkljdskljfkl jkld kdjfksf kdlsjfksldfjksljfkdsjfklsjdkfjdklsjfkldsfjkjskldfjkdklsjfksdjdolor sit amet consectetur adipisicing elit. Harum, saepe aut, ullam ea ad neque consequuntur dolorem aliquid temporibus obcaecati natus, asperiores molestiae ratione nisi accusamus veniam atque hic accusantium fkljdzkjfkj kjfkldjsklfj dkjfkldjfsl  skdjkfljdls .
              </p>
            </div>

          </div>
          <div className='positions col-span-3 h-full relative '>

            <div className='shadow-2xl bg-opacity-40 relative skills col-span-2 shadow-3xl bg-purple-400 rounded-2xl p-10 h-full'>
              <h1 className=' align-middle text-center justify-center pb-5 font-extrabold text-2xl'>
                My position
              </h1>
              <p className='text-center' >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, accusantium ullam perferendis reprehenderit blanditiis esse nulla temporibus adipisci ipsum quia repudiandae odio. Magni, debitis veniam dicta quisquam accusamus aut dolore! Nihil dolores ex provident aut incidunt ipsam quibusdam, debitis autem, libero nisi soluta, dolore blanditiis. Quod facere sit et quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at possimus sed nostrum sequi dolorem voluptas! Enim, velit quod commodi id quis eaque nulla eius, tempora deleniti quae sapiente repellat error at illum vero repudiandae rerum modi, praesentium earum natus animi. Sapiente sint error voluptate enim dolores doloremque, alias blanditiis!
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
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.38/build/spline-viewer.js"></script>
              <spline-viewer loading-anim-type="none" url="https://prod.spline.design/J0o-TTFozYf6Y4JH/scene.splinecode"></spline-viewer>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, consequatur unde itaque, sit maiores, eaque accusantium alias quos neque sequi obcaecati! Aliquid, harum? Quidem voluptates corporis aperiam possimus nihil aliquam dolor, aut quasi ratione inventore saepe placeat eligendi consequuntur eveniet unde modi officia facere minima quos porro, voluptatum ducimus quae.
            </p>
          </div>
        </section>


        <section className='projects col-span-5 flex h-screen items-center gap-10 pt-40 p-10 flex-col'>
          <h1 className='p-10 text-3xl font-extrabold pb-15'>
            Works I have done As a Graphic Desginer
          </h1>
          <div className=' grid grid-cols-5 gap-3 '>
            <div className=' grid grid-cols-3  col-span-3 gap-3 '>
              <div className='card_project col-span-3 bg-orange-400 shadow-2xl rounded-2xl p-5 bg-opacity-40'>
                <h1 className=' font-extrabold text-2xl text-center pb-5'>
                  Card Project 
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem optio, tempore pariatur autem magni laborum magnam suscipit necessitatibus unde impedit, minus vero. Nemo, excepturi dignissimos? At velit est ipsum.
                </p>
                <div className=' pt-10 pb-10'>
                    <ImageScroller />
                </div>
              </div>
              <div className='items-center text-center p-5 justify-center shadow-2xl rounded-2xl p-5 bg-opacity-40 bg-lime-400 '>
                <h1 className=' font-bold text-2xl '>
                  Text Book
                </h1>
              </div>
              <div className=' items-center text-center p-5 justify-center shadow-2xl rounded-2xl p-5 bg-opacity-40 bg-purple-800'>
                <h1 className='font-bold text-2xl' >
                  packaging
                </h1>
                <p>
                  
                </p>
              </div>
              <div className=' items-center text-center p-5 justify-center  shadow-2xl rounded-2xl p-5 bg-opacity-40 bg-yellow-200'>
                <h1 className='font-bold text-2xl'>
                  sedssl
                </h1>
              </div>
            </div>

            {/* next */}
            <div className=' col-span-2 flex flex-col space-y-3 rounded-2xl'>
              <div className='bg-opacity-20 shadow-2xl bg-green-200 rounded-2xl h-auto items-center text-center p-5 justify-center  '>
                <h1 className=' text-3xl font-extrabold pb-5'>
                  Duothan
                </h1>
                <ImageScrollerDuothan/>
                <p className=' text-white pt-5'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sit quae doloribus id consequatur molestias doloremque ducimus necessitatibus, a dolorum officiis laboriosam dolores rerum, reiciendis quo laborum error! Reprehenderit.
                </p>

              </div>
              <div className='bg-yellow-500 bg-opacity-30 p-10 rounded-2xl h-auto shadow-2xl'>
                <h1 className=' font-bold text-center text-2xl  '>
                  Manthra 
                </h1>
                <div className='p-5'>
                 <ImageScrollerManthra/>
                </div>
                <p className=''>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores sit quae doloribus id consequatur molestias doloremque ducimus necessitatibus, a dolorum officiis laboriosam dolores rerum, reiciendis quo laborum error! Reprehenderit.
                </p>
              </div>

            </div>
             {/* next */}
            <div className=' col-span-1 shadow-4xl bg-opacity-40 p-5 bg-pink-200 rounded-2xl'>
                <h1 className=' font-bold text-center text-2xl pb-5'>
                  Text Book Designs 
                </h1>
              <p>
                ore placeat nam! Voluptate sit officia, dolor aspernatur excepturi fugiat maxime ex!
              </p>
            </div>
            <div className='col-span-3 shadow-2xl p-5 bg-opacity-40 bg-blue-400 rounded-2xl'>
              <h1 className=' font-bold text-center text-2xl pb-5'>
              Packing And Labeling 
              </h1>
              <p>
                Lorem ip Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae nihil dolorem quod esse accusamus vero ea quia explicabo molestiae.
              </p>

            </div>
            <div className=' col-span-1  p-5  bg-opacity-30 shadow-2xl bg-pink-200 rounded-2xl'>
              <h1 className=' font-bold text-center text-2xl pb-5'>
                  SEDS SL 
              </h1>
              <p className=''>
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
