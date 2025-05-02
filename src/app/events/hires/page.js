'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

export default function Home() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <div className='flex flex-col items-center justify-center w-full gap-5 sm:flex-row sm:gap-10'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 } }}
                        className='flex-1 w-full'
                    >
                        <Button wfull href="https://docs.google.com/document/d/1zYn2gDWH9G5k7_J-MY9bKyKPoOyhm62Q9e6qGJxRGNU/edit?usp=sharing">Download Prompt</Button>
                    </motion.div>
                </div>
            )
        }
        else {
            return (
                <div className='flex flex-col items-center justify-center w-full gap-6 sm:gap-10'>
                    <p className='text-xl font-medium sm:text-2xl'>Prompts releasing in:</p>
                    <div className='flex justify-center gap-3 xs:gap-6 sm:gap-10'>
                        <div className='flex flex-col items-center justify-center sm:gap-2'>
                            <span className='font-bold text-md sm:text-2xl font-pressStart'>{String(days).padStart(2, '0')}</span>
                            <span className='text-sm font-medium sm:text-md text-white/60'>days</span>
                        </div>

                        <span className='font-semibold text-md sm:text-2xl text-white/60'>:</span>

                        <div className='flex flex-col items-center justify-center sm:gap-2'>
                            <span className='font-bold text-md sm:text-2xl font-pressStart'>{String(hours).padStart(2, '0')}</span>
                            <span className='text-sm font-medium sm:text-md text-white/60'>hours</span>
                        </div>

                        <span className='font-semibold text-md sm:text-2xl text-white/60'>:</span>

                        <div className='flex flex-col items-center justify-center sm:gap-2'>
                            <span className='font-bold text-md sm:text-2xl font-pressStart'>{String(minutes).padStart(2, '0')}</span>
                            <span className='text-sm font-medium sm:text-md text-white/60'>minutes</span>
                        </div>

                        <span className='font-semibold text-md sm:text-2xl text-white/60'>:</span>

                        <div className='flex flex-col items-center justify-center sm:gap-2'>
                            <span className='font-bold text-md sm:text-2xl font-pressStart'>{String(seconds).padStart(2, '0')}</span>
                            <span className='text-sm font-medium sm:text-md text-white/60'>seconds</span>
                        </div>
                    </div>
                </div>
            )
        }

    };

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[75px] sm:gap-[100px] pt-20 sm:pt-0'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Hi-Res</h1>
                    </motion.div>
                    <p className='font-light text-center text-md sm:text-lg text-white/90'>Explore our annual symposium and join us as we celebrate creativity, passion, and the art of photography.</p>
                </div>

                <Countdown date={new Date(2025, 4, 2, 23, 30, 0)} renderer={renderer} />
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}