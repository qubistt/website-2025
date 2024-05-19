'use client'
import Button from '@/components/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Results() {

    return (
        <>
            <div className='min-h-screen flex flex-col items-center justify-center gap-[100px]'>
                <div className='flex flex-col justify-center items-center gap-7 w-[90vw] sm:w-[75vw] md:w-[66vw] lg:w-[50vw] xl:w-[40vw]'>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }}
                    >
                        <h1 className='font-greenBrooks text-8xl'>Results</h1>
                    </motion.div>
                    <p className='text-md sm:text-lg font-light text-white/90 text-center'>View the results of Digex 2024, our annual symposium where we celebrate creativity, passion, and the art of photography.</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <svg width="29" height="16.5" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce'>
                        <path d="M4 4L29 29L54 4" stroke="rgba(255, 255, 255, 0.8)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-sm text-white/80'>Scroll</p>
                </div>
            </div>

            {/* Overall */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Overall Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>Winner</div>
                        <div className='w-2/3 px-3 md:px-6 py-2'>Amity International School Noida</div>
                    </div>
                    <div className='flex flex-row border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>First Runners Up</div>
                        <div className='w-2/3 px-3 md:px-6 py-2'>Tagore International Vasant Vihar</div>
                    </div>
                    <div className='flex flex-row '>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>Second Runners Up</div>
                        <div className='w-2/3 px-3 md:px-6 py-2'>The Mothers International School</div>
                    </div>
                </div>
            </div>

            {/* Hi-Res */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Hi-Res Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Bhopal</span>
                        </div>
                        <div className='w-2/5 md:w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Aadie Srivastava</div>
                            <div className='px-3 text-xs'>Harshit Tilante</div>
                            <div className='px-3 text-xs'>Saloni Dhakar</div>
                            <div className='px-3 mb-1 text-xs'>Zainab Saify</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Amity International School Noida</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Arhant Singh</div>
                            <div className='px-3 text-xs'>Madhav Gupta</div>
                            <div className='px-3 text-xs'>Vinayak Gupta</div>
                            <div className='px-3 mb-1 text-xs'>Yasharth Raj Shahi</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Dwarka</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Arnav Verma</div>
                            <div className='px-3 text-xs'>Jyotsna Arora</div>
                            <div className='px-3 text-xs'>Khushi Talwar</div>
                            <div className='px-3 mb-1 text-xs'>Jaya Arora</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Creadive */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Creadive Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Amity International School Sector 46</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Naitik Agarwal</div>
                            <div className='px-3 text-xs'>Ronith Taneja</div>
                            <div className='px-3 mb-1 text-xs'>Ishit Rastog</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Noida</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Shabadneet Singh Bhatia</div>
                            <div className='px-3 text-xs'>Riddhisha Mittal</div>
                            <div className='px-3 mb-1 text-xs'>Ayra Shere</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Modern School Barakhamba Road</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Aarav Vohra</div>
                            <div className='px-3 text-xs'>Ishaan Singh</div>
                            <div className='px-3 mb-1 text-xs'>Sumair Sidhanshu Chopra</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phonescape */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Phonescape Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Greater Faridabad</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Harsheen Barar</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Tagore International School Vasant Vihar</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Harshit Kumar</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>K.R. Mangalam World School Vikaspuri</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Arshraj Singh Kohli</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Camistic */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Camistic Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Bal Bharti Public School Noida</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Ashwin Anil</div>
                            <div className='px-3 mb-1 text-xs'>Prabal Jain</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Sushant Lok Gurgaon</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Devyani Kachhwah</div>
                            <div className='px-3 mb-1 text-xs'>Sagun Thukral</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>The Mothers International School</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Simran Lall</div>
                            <div className='px-3 mb-1 text-xs'>Anushka Sachdeva</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pixelate-Jr */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Pixelate Jr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Summer Fields School</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Kushagra Gupta</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Rohini</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Tanush Bhutani</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>The Mothers International School</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Aradhyab Hola</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pixelate-Sr */}
            <div className='w-full px-2 sm:px-5 flex flex-col gap-10 mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center'>Pixelate Sr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Amity International School Noida</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Anika</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>The Mothers International School</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Ananya Bajaj</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <span>Delhi Public School Vasant Kunj</span>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Arv Duggal</div>
                        </div>
                    </div>
                </div>
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