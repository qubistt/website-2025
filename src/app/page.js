'use client'

import { motion } from 'framer-motion';

import Button from '../components/Button';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px] w-full xs:w-auto px-3 sm:px-6 md:px-0'>
                <div className='flex flex-col items-center justify-center'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                        className='flex flex-col text-3xl font-greenBrooks xs:text-4xl sm:text-5xl md:text-7xl'
                    >
                        <h1>Change your lens</h1>
                        <h1>Change your story</h1>
                    </motion.div>

                    <div className='relative -mt-4 sm:-mt-7' data-no-blend>
                        <div className='z-0 absolute top-[-37%] left-[-37%] w-[175%] h-[175%] bg-[radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_rgba(255,255,255,0)_100%)] opacity-40 blur-[100px]'></div>
                        <img src="/images/lens.png" alt="A lens" style={{ height: "200px", width: "250px" }} className='z-[1] w-[125px] xs:w-[150px] sm:w-[200px] md:w-[250px]' />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-5 sm:flex-row sm:gap-10'>
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

            <div className='flex flex-col items-center justify-center gap-14'>
                <h1 className='text-4xl text-center sm:text-6xl font-greenBrooks'>Supported By</h1>
                <div className='flex flex-col items-center justify-center gap-8 px-4 py-8'>
                    <img src="/images/ManavRachna.png" alt='Manav Rachna' style={{ width: "400px", height: "196px" }} className='w-3/4'/>
                    <img src="/images/MalhotraColorLab.png" alt='Malhotra Color Lab' style={{ width: "150px", height: "150px" }} className='w-1/2'/>
                    <img src="/images/ExpressBuilders.jpg" alt='Express Builders' style={{ width: "400px", height: "128px" }} className="w-full rounded-md " />
                    <img src="/images/SmilingTree.jpg" alt='Smiling Tree' style={{ width: "400px", height: "93.4px" }} className='w-full rounded-md '/>
                </div>
            </div>

            <iframe width="914" height="514" className='w-[90vw] h-[calc(0.56*90vw)] sm:w-[80vw] sm:h-[calc(0.56*80vw)] max-h-[calc(100vh-100px)] max-w-[calc(1.77*calc(100vh-100px))] rounded-2xl' src="https://www.youtube.com/embed/pQGoO0g_CEk" title="Digex 2024 Trailer" frameborder="0" allow="autoplay; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-20 mt-[100px] sm:mt-[200px] px-[5vw] sm:px-[6vw] xl:px-[10vw]' id="about">
                <div className='flex flex-col justify-center gap-6 sm:gap-10'>
                    <h1 className='text-4xl font-greenBrooks xs:text-5xl sm:text-6xl'>Who Are We?</h1>
                    <p className='text-[12px] xs:text-md sm:text-lg font-light text-white/90 text-justify'>The Digital Excellence society or Digex is Delhi Public School R.K.Puram&#39;s photography and film-making club. Founded in 2009, the Digex society is a group of passionate members who channel their creativity and out of the box thinking into creative fields like Photography, Film-making, Creative Design, Video editing and much more. Any student of the school can seize the opportunity to be a part of the club. At present, the club is over 60 members strong with students from all classes ( 6-12 ). The Digex society is invited to a plethora of competitions and events throughout the year that are on national and international levels. Our goal is to strive towards being the best in all fields and competitions we take part in.</p>
                    <div className='flex flex-col items-center justify-center w-full gap-5 xs:flex-row xs:gap-10'>
                        <Button wfull href="/members">Our Team</Button>
                        <Button wfull href="/gallery">Our Work</Button>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/1245066/pexels-photo-1245066.jpeg" style={{ height: "400px", width: "500px" }} className=' w-[70vw] h-[78vw] xs:w-[50vw] xs:h-[56vw] lg:w-[30vw] lg:h-[33vw] xl:w-[400px] xl:h-[450px] object-cover rounded-t-full' />
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-[100px] sm:mt-[200px] px-[5vw] sm:px-[6vw] xl:px-[20vw]'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <img src="/images/sarikakaushal.jpg" style={{ width: "400px" }} className=' w-[70vw] xs:w-[50vw] lg:w-[30vw] xl:w-[200px] rounded-xl' />
                    <div className='flex flex-col items-center justify-center w-max'>
                        <p className='text-xl font-bold text-white/90'>Mrs. Sarika Kaushal</p>
                        <p className='text-sm font-light text-white/75'>Founder and Teacher-in-Charge</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-light text-justify text-md xs:text-lg sm:text-xl text-white/90'>Mrs. Kaushal founded Digex in 2009, and has been the club&#39;s teaides the club leadership in planning and organizing events, and mentors the club&#39;s junior members.</p>
                </div>
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')]`}></div>
        </>
    )
}