'use client'
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Gallery</h1>
                    </motion.div>
                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>Each image tells a unique story, inviting you to explore the world through their lenses. Check out amazing pictures photographed by our members.</p>
                </div>
            </div>

            <Gallery />

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')50%]`}></div>

        </>
    )
}

