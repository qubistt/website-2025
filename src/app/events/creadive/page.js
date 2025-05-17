'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[75px] sm:gap-[100px] pt-20 sm:pt-0'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Creadive</h1>
                    </motion.div>
                    <p className='font-light text-center text-md sm:text-lg text-white/90'>Explore our annual symposium and join us as we celebrate creativity, passion, and the art of photography.</p>
                    <Button href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSd1N5x-6ZzQG2pz56ctuUk6kqWgqXhJ0ZXCjFNSQQLfrMUmtw/viewform?usp=send_form" target="_blank" className='w-full'>SUBMIT HERE</Button>
                </div>
                

                {/* <Countdown date={1715340600000} renderer={renderer} /> */}
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}