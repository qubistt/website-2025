'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from './components/Button';
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"

export default function Home() {

    return (
        <main className="max-w-full w-[100vw] overflow-x-hidden flex flex-col items-center justify-center font-montserrat">

            <div className='z-10 fixed top-0 left-0 max-w-full w-screen px-24 flex justify-between py-7 bgDot'>
                <p className='font-greenBrooks text-3xl'>Digex</p>
                <div className='flex items-center gap-7'>
                    <Link href="/" className='text-[10px] font-pressStart'>Home</Link>
                    <Link href="/" className='text-[10px] font-pressStart'>Gallery</Link>
                    <Link href="/" className='text-[10px] font-pressStart'>Events</Link>
                    <Link href="/" className='text-[10px] font-pressStart'>Members</Link>
                    <Link href="/" className='text-[10px] font-pressStart'>Alumni</Link>
                </div>
            </div>

            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px]'>
                <div className='flex flex-col justify-center items-center'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                        className='font-greenBrooks text-7xl flex flex-col'
                    >
                        <h1>Change your lens</h1>
                        <h1>Change your story</h1>
                    </motion.div>

                    <div className='relative -mt-7' data-no-blend>
                        <div className='z-0 absolute top-[-37%] left-[-37%] w-[175%] h-[175%] bg-[radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_rgba(255,255,255,0)_100%)] opacity-40 blur-[100px]'></div>
                        <Image priority src="/images/lens.png" alt="A lens" width={250} height={200} className='z-[1]' />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 w-full'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 } }}
                        className='flex-1'
                    >
                        <Button wfull>Learn More</Button>
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.4 } }}
                        className='flex-1'
                    >
                        <Button wfull>Check our events</Button>
                    </motion.div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-14'>
                <h1 className='font-greenBrooks text-6xl'>Supported By</h1>
                <div className='flex flex-row justify-center items-center gap-10'>
                    <Image src="/images/gaudiumIVF.png" alt='Gaudium IVF' width={400} height={500} />
                    <Image src="/images/gaudiumIVF.png" alt='Gaudium IVF' width={400} height={500} />
                </div>
            </div>

            <div className='flex flex-row justify-center items-center gap-20 mt-[200px] px-[6vw] xl:px-[10vw]'>
                <div className='flex flex-col justify-center gap-10'>
                    <h1 className='font-greenBrooks text-6xl'>Who Are we?</h1>
                    <p className='text-lg font-light text-white/90 text-justify'>The Digital Excellence society or Digex is Delhi Public School R.K.Puram&#39;s photography and film-making club. Founded in 2009, the Digex society is a group of passionate members who channel their creativity and out of the box thinking into creative fields like Photography, Film-making, Creative Design, Video editing and much more. Any student of the school can seize the opportunity to be a part of the club. At present, the club is over 60 members strong with students from all classes ( 6-12 ). The Digex society is invited to a plethora of competitions and events throughout the year that are on national and international levels. Our goal is to strive towards being the best in all fields and competitions we take part in.</p>
                    <div className='flex justify-center items-center gap-10 w-full'>
                        <Button wfull>Our Team</Button>
                        <Button wfull>Our Work</Button>
                        {/* <div className='w-full'></div> */}
                    </div>
                </div>
                <Image src="https://images.pexels.com/photos/663487/pexels-photo-663487.jpeg" alt='Picture' width={400} height={500} className='w-[30vw] h-[33vw] xl:w-[400px] xl:h-[450px] object-cover rounded-t-full' />
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')]`}></div>

            <div className='z-10 max-w-full w-screen px-24 flex justify-between items-center py-7 mt-[200px] bgDot'>
                {/* <p className='font-greenBrooks text-3xl flex-1'>Digex</p> */}
                <div className='flex-1 flex justify-start gap-7'>
                    <Link href="/" className='text-2xl' data-cursor-color="#1877F2"><SiFacebook /></Link>
                    <Link href="/" className='text-2xl' data-cursor-color="#d62976"><SiInstagram /></Link>
                    <Link href="/" className='text-2xl' data-cursor-color="#ff0000"><SiYoutube /></Link>
                </div>
                <div className='flex-1 flex justify-center items-center gap-4 font-montserrat text-white/70'>
                    <Link href="mailto:digex@dpsrkp.net" className='underline text-center text-md text-white/90'>digex@dpsrkp.net</Link>
                    <p className='text-md'>|</p>
                    <p className='text-md'>All Rights Reserved &copy;</p>
                </div>

                <div className='flex-1 flex justify-end items-center gap-1 font-montserrat text-white/70'>
                    <p className='text-sm'>Designed & Developed by</p>
                    <Link href="https://github.com/atharv777" target="_blank" className='text-sm text-white/85 hover:underline'>Atharv</Link>
                </div>
            </div>
        </main>
    )
}