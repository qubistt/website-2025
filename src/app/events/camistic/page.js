'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

export default function Home() {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return (
                <div className='flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-10 w-full'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 } }}
                        className='flex-1 w-full'
                    >
                        <Button wfull href="https://docs.google.com/document/d/1jpwa4MW1vZ2tJWpbBU19Zv48o8BrIgHRrfXgzvazBYY/edit?usp=sharing">Download Prompt</Button>
                    </motion.div>
                </div>
            )
        }
        else {
            return (
                <div className='flex justify-center items-center flex-col gap-6 sm:gap-10 w-full'>
                    <p className='text-xl sm:text-2xl font-medium'>Prompts releasing in:</p>
                    <div className='flex justify-center gap-3 xs:gap-6 sm:gap-10'>
                        <div className='flex flex-col justify-center items-center sm:gap-2'>
                            <span className='text-md sm:text-2xl font-bold font-pressStart'>{String(days).padStart(2, '0')}</span>
                            <span className='text-sm sm:text-md font-medium text-white/60'>days</span>
                        </div>

                        <span className='text-md sm:text-2xl font-semibold text-white/60'>:</span>

                        <div className='flex flex-col justify-center items-center sm:gap-2'>
                            <span className='text-md sm:text-2xl font-bold font-pressStart'>{String(hours).padStart(2, '0')}</span>
                            <span className='text-sm sm:text-md font-medium text-white/60'>hours</span>
                        </div>

                        <span className='text-md sm:text-2xl font-semibold text-white/60'>:</span>

                        <div className='flex flex-col justify-center items-center sm:gap-2'>
                            <span className='text-md sm:text-2xl font-bold font-pressStart'>{String(minutes).padStart(2, '0')}</span>
                            <span className='text-sm sm:text-md font-medium text-white/60'>minutes</span>
                        </div>

                        <span className='text-md sm:text-2xl font-semibold text-white/60'>:</span>

                        <div className='flex flex-col justify-center items-center sm:gap-2'>
                            <span className='text-md sm:text-2xl font-bold font-pressStart'>{String(seconds).padStart(2, '0')}</span>
                            <span className='text-sm sm:text-md font-medium text-white/60'>seconds</span>
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
                        <h1 className='font-greenBrooks text-8xl'>Camistic</h1>
                    </motion.div>
                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>Explore our annual symposium and join us as we celebrate creativity, passion, and the art of photography.</p>
                </div>

                {/* <Countdown date={1715340600000} renderer={renderer} /> */}
                <div className='flex justify-center items-center flex-col w-full'>
                    <p className='text-xl xs:text-2xl sm:text-4xl font-semibold'>Prompts Coming Soon...</p>
                </div>
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}