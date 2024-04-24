'use client'
import { motion } from 'framer-motion';
import membersList from "./members.json"
import Image from 'next/image';

export default function Home() {

    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[50px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Members</h1>
                    </motion.div>

                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>Meet our team, our jewels in the world of creativity. Get to know the faces behind the lens who make our community vibrant and inspiring.</p>
                </div>
            </div>

            {
                membersList.map((item, ind) => {
                    return (
                        <div key={ind} className='w-full px-10 flex flex-col gap-10 mb-24'>
                            <h2 className='text-5xl font-greenBrooks'>{item.year} class</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                                {item.members.map((mem, _ind) => {
                                    return (
                                        <div key={_ind} className={`relative p-[2.5px] group`}>
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
                                                className="absolute inset-0 rounded-[12px] z-[1] will-change-transform group-hover:[backgroundImage:var(--border-bg)] transition duration-500"
                                            />

                                            <div className="relative z-10 rounded-[10px] w-full flex flex-col justify-center items-center p-5 bg-[#ffffff0d] group-hover:bg-[#000000e3] border border-white/20 group-hover:border-none">
                                                <div className="w-full px-[33%] py-5 mb-3 [background:url('/images/grid.svg')_no-repeat_center_center] [backgroundSize:50%]">
                                                    <Image
                                                        src={mem.image}
                                                        width={300}
                                                        height={300}
                                                        className='rounded-full aspect-square object-cover'
                                                        data-no-blend={true}
                                                    />
                                                </div>
                                                <p className='text-xl font-medium'>{mem.name}</p>
                                                <p className='text-md font-extralight'>{mem.role}</p>
                                            </div>
                                        </div>
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

