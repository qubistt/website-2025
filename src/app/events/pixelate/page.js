'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[75px] sm:gap-[100px] pt-20 sm:pt-0'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Pixelate</h1>
                    </motion.div>
                    <p className='font-light text-center text-md sm:text-lg text-white/90'>Explore our annual symposium and join us as we celebrate creativity, passion, and the art of photography.</p>
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfQobHF30Oylp9WN5exMw0Umaph1SQVKTLitG5Wk1NEZOI4Ig/viewform" target="_blank" className='w-full'>SENIORS SUBMIT HERE</Button>
                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSd7-e_1FGZu3LKRkIUICTZR6eKcU2TRbJp6Yhr_evTwsvszuQ/viewform" target="_blank" className='w-full'>JUNIORS SUBMIT HERE</Button>
                </div>

                {/* <Countdown date={1716340600000} renderer={renderer} /> */}

            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}