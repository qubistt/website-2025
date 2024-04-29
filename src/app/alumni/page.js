'use client'
import { motion } from 'framer-motion';
import alumniList from "./alumni.json"
import Card from '@/components/Card';


export default function Home() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Alumni</h1>
                    </motion.div>

                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>Meet the remarkable alumni of Digex, who have paved the path and shaped our club the way it is.</p>
                </div>


            </div>

            {
                alumniList.map((item, ind) => {
                    return (
                        <div key={ind} className='w-full px-10 flex flex-col gap-10 mb-24'>
                            <h2 className='text-5xl font-greenBrooks'>Batch of {item.year}</h2>
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

            <div className={`absolute z-[-1] top-0 left-0 h-screen w-screen [background:linear-gradient(180deg,rgba(0,0,0,0)77.6%,#000000_100%),_url('/images/bg.svg')]`}></div>
        </>
    )
}

