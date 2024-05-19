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
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Overall Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
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
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center'>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Hi-Res Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1Tuqv1yeAW-rQ29QvqHRhgTcZSy7-rwis" className='hover:underline'>Delhi Public School Bhopal</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1jrTyfFmmOUGSiFbwDOdp2JjgSai96oOs" className='hover:underline'>Amity International School Noida</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1bOL61QKyzveSoFTzY3HlIkXObZPhy127" className='hover:underline'>Delhi Public School Dwarka</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Arnav Verma</div>
                            <div className='px-3 text-xs'>Jyotsna Arora</div>
                            <div className='px-3 text-xs'>Khushi Talwar</div>
                            <div className='px-3 mb-1 text-xs'>Jaya Arora</div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Creadive */}
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Creadive Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1L8hUIp29iNWpIO4e2v5JQSaUHH-q88Yq" className='hover:underline'>Amity International School Sector 46</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1jaqpdizg75tB6INT2RMKX8drSr4664BN" className='hover:underline'>Delhi Public School Noida</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1nN8DRGeioLzdnCQ2FK-Cikv8SZH2mch1" className='hover:underline'>Modern School Barakhamba Road</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1'>
                            <div className='px-3 mt-1 text-xs'>Aarav Vohra</div>
                            <div className='px-3 text-xs'>Ishaan Singh</div>
                            <div className='px-3 mb-1 text-xs'>Sumair Sidhanshu Chopra</div>
                        </div>
                    </div>
                </div><div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Phonescape */}
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Phonescape Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1HnyjWJ8FUJi3HJhGbU56dM8zoVexXIZE" className='hover:underline'>Delhi Public School Greater Faridabad</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1T5CdF_RE4OyO6C39qercSus-vGQ1SKre" className='hover:underline'>Tagore International School Vasant Vihar</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1QKYkdEYz_nvmG6wAk7Qc4lOXP84ISrjM" className='hover:underline'>K.R. Mangalam World School Vikaspuri</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Arshraj Singh Kohli</div>
                        </div>
                    </div>
                </div><div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Camistic */}
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Camistic Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1Q5J7PL7CcdZLxvC8yxAmE--owJFQs-1w" className='hover:underline'>Bal Bharti Public School Noida</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1dVRXTq69FUTqco6s3wGq1F57EvRvq4Qu" className='hover:underline'>Delhi Public School Sushant Lok Gurgaon</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1wbXCyiJHflHCTAU6_NklPSaEmMqFTUWU" className='hover:underline'>The Mothers International School</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 mt-1 text-xs'>Simran Lall</div>
                            <div className='px-3 mb-1 text-xs'>Anushka Sachdeva</div>
                        </div>
                    </div>
                </div><div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Pixelate-Jr */}
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Pixelate Jr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1UBidwRvRK3Bpuf-RSY3VRurNvqTpTHhl" className='hover:underline'>Tagore International School Vasant Vihar</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Aradhya Bhola</div>
                        </div>
                    </div>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>Second</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/1Ymlpe4c-w6ng2icZNBm8p8p6KlCM1wwT" className='hover:underline'>Delhi Public School Rohini</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1Q-CdZVVdLRwv9VWcbO5gSAkKs0bULKGU" className='hover:underline'>Summer Field School</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Kushagra Gupta</div>
                        </div>
                    </div>
                </div><div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
                    <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.75)" stroke-width="0" viewBox="0 0 256 256" height="19px" width="19px" xmlns="http://www.w3.org/2000/svg"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.5C39.74,56.83,78.26,17.15,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.64,71.64,0,0,0,27.64,56.3h0A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z"></path></svg>
                    <p className='text-xs'>Pro Tip: <span className='ml-[2px] text-white/50'>Click on a school to view their submission</span></p>
                </div>
            </div>

            {/* Pixelate-Sr */}
            <div className='w-full px-2 sm:px-5 flex flex-col mb-24 items-center '>
                <h2 className='text-5xl font-greenBrooks text-center mb-10'>Pixelate Sr Winners</h2>
                <div className='w-full md:w-3/4 lg:w-3/5 flex flex-col bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.15)] rounded-md text-xs sm:text-sm md:text-base mb-4'>
                    <div className='flex flex-row items-stretch border-[rgba(255,255,255,0.15)] border-b'>
                        <div className='w-1/5 md:w-1/4 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center justify-center'>
                            <span>First</span>
                        </div>
                        <div className='w-2/5 md:w-1/2 px-3 md:px-6 py-2 border-r border-[rgba(255,255,255,0.15)] flex items-center'>
                            <a target="_blank" href="https://drive.google.com/drive/folders/15wXt4SNcr_yldeSK_f58F13arb0GYhiQ" className='hover:underline'>Amity International School Noida</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1e4N44P5-q3mvPb0jZprABcahLki66loW" className='hover:underline'>The Mothers International School</a>
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
                            <a target="_blank" href="https://drive.google.com/drive/folders/1Xo5HvrNIrtuFp4_QqTYe3XcJUkuOen2B" className='hover:underline'>Delhi Public School Vasant Kunj</a>
                        </div>
                        <div className='w-2/5 md:w-1/4 flex flex-col gap-1 justify-center'>
                            <div className='px-3 my-1 text-xs'>Arv Duggal</div>
                        </div>
                    </div>
                </div><div className='w-full md:w-3/4 lg:w-3/5 flex items-center gap-1 mb-5 text-white/60'>
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