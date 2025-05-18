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
                    <p className='font-light text-center text-md sm:text-lg text-white/90'>View the results of Digex 2025, our annual symposium where we celebrate creativity, passion, and the art of photography.</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-2'>
                    <svg width="29" height="16.5" viewBox="0 0 58 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='animate-bounce'>
                        <path d="M4 4L29 29L54 4" stroke="rgba(255, 255, 255, 0.8)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-sm text-white/80'>Scroll</p>
                </div>
            </div>

            {/* Overall */}
            <div className='flex flex-col items-center w-full px-2 mb-24 sm:px-5 '>
                <h2 className='mb-10 text-5xl text-center font-greenBrooks'>Overall Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>Winner</div>
                        <div className='w-2/3 px-3 py-2 md:px-6'>DPS Faridabad</div>
                    </div>
                    <div className='flex flex-row border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>First Runners Up</div>
                        <div className='w-2/3 px-3 py-2 md:px-6'>Amity International</div>
                    </div>
                    <div className='flex flex-row '>
                        <div className='w-1/3 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)]'>Second Runners Up</div>
                        <div className='w-2/3 px-3 py-2 md:px-6'>Delhi Public School Sushant Lok</div>
                    </div>
                </div>
            </div>

            {/* Hi-Res */}
            <div className='flex flex-col items-center w-full px-2 mb-24 sm:px-5'>
                <h2 className='mb-10 text-5xl text-center font-greenBrooks'>Hi-Res Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1FhN-MWjokCxe8QMxgwj-CQPOpL6MQe5d?usp=sharing" className='hover:underline'>Delhi Public School Faridabad</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>JAYANT ARORA</div>
                            <div className='px-3 text-xs'>SHUDDHI HANS</div>
                            <div className='px-3 text-xs'>KASHVI KAPOOR</div>
                            <div className='px-3 mb-1 text-xs'>VANSH DUDEJA</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1KexBcSnylI0F9NUxpbST9XG2dsENfUpV?usp=sharing" className='hover:underline'>Delhi Public School Sushant Lok</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>AADIT AGARWAL</div>
                            <div className='px-3 text-xs'>RANBIR NARANG</div>
                            <div className='px-3 text-xs'>ALIYA TRIKHA</div>
                            <div className='px-3 mb-1 text-xs'>SARVANGI RANA</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1_4GSV2oRICLWb_c25a8atzEUIU8OdCUY?usp=sharing" className='hover:underline'>Tagore International School Vasant Vihar</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>YANA PAWAR</div>
                            <div className='px-3 text-xs'>JAYDEN HAOKIP MANGBOILEN</div>
                            <div className='px-3 text-xs'>TANVI SHARMA</div>
                            <div className='px-3 mb-1 text-xs'>ANVAY SHAH CHAWLA</div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-full gap-1 mb-5 md:w-3/4 lg:w-3/5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Creadive */}
            <div className='flex flex-col items-center w-full px-2 mb-24 sm:px-5 '>
                <h2 className='mb-10 text-5xl text-center font-greenBrooks'>Creadive Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1M4fChI92ZXCxZEoSAd9CItVs6sT7duEo?usp=sharing" className='hover:underline'>Delhi Public School Noida</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>SHABADNEET SINGH BHATIA</div>
                            <div className='px-3 mb-1 text-xs'>AADITYN PILLAI</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/15IuqeNIyaLdAG1lxz8bYc7MZoKH8yR6q?usp=sharing" className='hover:underline'>Delhi Public School Sushant Lok</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>SARVANGI RANA</div>
                            <div className='px-3 text-xs'>AADIT AGARWAL</div>
                            <div className='px-3 mb-1 text-xs'>ANIKET HALDER</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1DpjkSs7Uanr1kssRWjBHi7vXJUQJRsKy?usp=sharing" className='hover:underline'>Salwan Public School</a>
                        </div>
                        <div className='flex flex-col w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 mt-1 text-xs'>NIYATI RUSTAGI</div>
                            <div className='px-3 text-xs'>EKAGRA AGARWAL</div>
                            <div className='px-3 mb-1 text-xs'>PRANAV SAINI</div>
                        </div>
                    </div>
                </div><div className='flex items-center w-full gap-1 mb-5 md:w-3/4 lg:w-3/5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            

            {/* Pixelate-Jr */}
            <div className='flex flex-col items-center w-full px-2 mb-24 sm:px-5 '>
                <h2 className='mb-10 text-5xl text-center font-greenBrooks'>Pixelate Jr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1gkeKFoi4qCi8JG7pAOQ5HyTHlXfP96u9?usp=sharing" className='hover:underline'>Amity International School Noida</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>ANIKA TYAGI</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1u9DZcDjD7jmYm_8BBnPxUbB-ZtAHA8en?usp=sharing" className='hover:underline'>Amity International School Gurgaon Sector 46</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>KUSHAGRA GOEL</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1kfnxdrCMpHs-_bWJBw1SaWBN4jyNDGWe?usp=sharing" className='hover:underline'>Modern School Barakhamba</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>ARYAN BANSAL</div>
                        </div>
                    </div>
                </div><div className='flex items-center w-full gap-1 mb-5 md:w-3/4 lg:w-3/5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Pixelate-Sr */}
            <div className='flex flex-col items-center w-full px-2 mb-24 sm:px-5 '>
                <h2 className='mb-10 text-5xl text-center font-greenBrooks'>Pixelate Sr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1xGPTr34wodk27qC6aMz5Yb-VWZYW_eiX?usp=sharing" className='hover:underline'>Delhi Public School Faridabad</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>JASON GURUNG</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/139Qe-NxJv1yRF-t-iMKMWc7NrT8_bPf7?usp=sharing" className='hover:underline'>Amity International School Gurgaon Sector 46</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>ARNAV VERMA</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Third</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1OG5ScNp6MZkhUN6wfV7quwy4RekCQFP8?usp=sharing" className='hover:underline'>Amity International School Noida</a>
                        </div>
                        <div className='flex flex-col justify-center w-2/5 gap-1 md:w-1/4'>
                            <div className='px-3 my-1 text-xs'>ADITYA VERMA</div>
                        </div>
                    </div>
                </div><div className='flex items-center w-full gap-1 mb-5 md:w-3/4 lg:w-3/5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
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