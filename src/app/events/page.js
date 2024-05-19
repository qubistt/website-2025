'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[100px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Events</h1>
                    </motion.div>
                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>Explore our annual symposium and join us as we celebrate creativity, passion, and the art of photography.</p>
                </div>


                <div className='flex justify-center items-center flex-col sm:flex-row gap-5 sm:gap-10 w-full'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, delay: 0.1 } }}
                        className='flex-1 w-full'
                    >
                        <Button wfull href="/events/results">View Digex 2024 results</Button>
                    </motion.div>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <svg width="29" height="16.5" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce'>
                        <path d="M4 4L29 29L54 4" stroke="rgba(255, 255, 255, 0.8)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-sm text-white/80'>Scroll</p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-20 w-full lg:px-40 '>
                <Card name="pixelate" src="/images/pixelate.png" />
                <Card name="phonescape" src="/images/phonescape.png" />
                <Card name="camistic" src="/images/camistic.png" />
                <Card name="hires" src="/images/hires.png" />
                <Card name="creadive" src="/images/creadive.png" />
            </div>

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}


const Card = (props) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    const cardVariants = {
        offscreen: {
            y: 200,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6
            }
        }
    };

    const router = useRouter();


    return (
        <motion.div
            className={`relative p-[2.5px]`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className="group" variants={cardVariants}>

                <motion.div
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{ backgroundSize: "400% 400%" }}
                    className="absolute inset-0 rounded-[10px] z-[1] opacity-40 blur-xl will-change-transform group-hover:[backgroundImage:var(--border-bg)] transition duration-500"
                />
                <motion.div
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{ backgroundSize: "400% 400%" }}
                    className="absolute inset-0 rounded-[10px] z-[1] will-change-transform group-hover:[backgroundImage:var(--border-bg)] transition duration-500"
                />

                <div className="relative z-[5] rounded-[10px]">
                    <img src={props.src} className='rounded-[12px]' />
                </div>
            </motion.div>
        </motion.div>
    )
}