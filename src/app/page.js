'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from '../components/Button';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px] w-full xs:w-auto px-3 sm:px-6 md:px-0'>
                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                        className='font-greenBrooks text-3xl xs:text-4xl sm:text-5xl md:text-7xl flex flex-col'
                    >
                        <h1>Change your lens</h1>
                        <h1>Change your story</h1>
                    </motion.div>

                    <div className='relative -mt-4 sm:-mt-7' data-no-blend>
                        <div className='z-0 absolute top-[-37%] left-[-37%] w-[175%] h-[175%] bg-[radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_rgba(255,255,255,0)_100%)] opacity-40 blur-[100px]'></div>
                        <img src="/images/lens.png" alt="A lens" style={{ height: "200px", width: "250px" }} className='z-[1] w-[125px] xs:w-[150px] sm:w-[200px] md:w-[250px]' />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-10 w-full'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 } }}
                        className='flex-1 w-full'
                    >
                        <Button wfull href="#about">Learn More</Button>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.4 } }}
                        className='flex-1 w-full'
                    >
                        <Button wfull href="/events">Check our events</Button>
                    </motion.div>
                </div>
            </div>

            {/* <div className='flex flex-col justify-center items-center gap-14'>
                <h1 className='font-greenBrooks text-6xl'>Supported By</h1>
                <div className='flex flex-row justify-center items-center gap-10'>
                    <Image src="/images/gaudiumIVF.png" alt='Gaudium IVF' width={400} height={500} />
                    <Image src="/images/gaudiumIVF.png" alt='Gaudium IVF' width={400} height={500} />
                </div>
            </div> */}

            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-0 sm:mt-[200px] px-[5vw] sm:px-[6vw] xl:px-[10vw]' id="about">
                <div className='flex flex-col justify-center gap-6 sm:gap-10'>
                    <h1 className='font-greenBrooks text-4xl xs:text-5xl sm:text-6xl'>Who Are we?</h1>
                    <p className='text-[12px] xs:text-md sm:text-lg font-light text-white/90 text-justify'>The Digital Excellence society or Digex is Delhi Public School R.K.Puram&#39;s photography and film-making club. Founded in 2009, the Digex society is a group of passionate members who channel their creativity and out of the box thinking into creative fields like Photography, Film-making, Creative Design, Video editing and much more. Any student of the school can seize the opportunity to be a part of the club. At present, the club is over 60 members strong with students from all classes ( 6-12 ). The Digex society is invited to a plethora of competitions and events throughout the year that are on national and international levels. Our goal is to strive towards being the best in all fields and competitions we take part in.</p>
                    <div className='flex justify-center items-center flex-col xs:flex-row gap-5 xs:gap-10 w-full'>
                        <Button wfull href="/members">Our Team</Button>
                        <Button wfull href="/gallery">Our Work</Button>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg" style={{ height: "400px", width: "500px" }} className=' w-[70vw] h-[78vw] xs:w-[50vw] xs:h-[56vw] lg:w-[30vw] lg:h-[33vw] xl:w-[400px] xl:h-[450px] object-cover rounded-t-full' />
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')]`}></div>
        </>
    )
}