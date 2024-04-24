'use client'
import { motion } from 'framer-motion';
import Gallery from '../../components/Gallery';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Events</h1>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

