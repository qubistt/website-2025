'use client'
import { motion } from 'framer-motion';
import membersList from "./members.json"
import Card from '@/components/Card';

export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[100px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Members</h1>
                    </motion.div>

                    <p className='font-light text-center text-md sm:text-lg text-white/90'>Meet our team, our jewels in the world of creativity. Get to know the faces behind the lens who make our community vibrant and inspiring.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <svg width="29" height="16.5" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce'>
                        <path d="M4 4L29 29L54 4" stroke="rgba(255, 255, 255, 0.8)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-sm text-white/80'>Scroll</p>
                </div>
            </div>

            {
                membersList.map((item, ind) => {
                    return (
                        <div key={ind} className='flex flex-col w-full gap-10 px-10 mb-24'>
                            <h2 className='text-5xl font-greenBrooks'>{item.year} Class</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                                {item.members.map((mem, _ind) => {
                                    return (
                                        <Card key={_ind} data={mem} />
                                    )
                                })}
                            </div>
                        </div >
                    )
                })
            }

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')80%]`}></div>
        </>
    )
}

