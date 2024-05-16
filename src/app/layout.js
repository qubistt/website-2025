import { Montserrat, Press_Start_2P } from 'next/font/google'
import localFont from 'next/font/local'
import Link from 'next/link';
import './globals.css'

import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"

import Cursor from '../components/Cursor';
import Notification from '../components/Notification';
import Navbar from '../components/Navbar';

const greenBrooks = localFont({
    src: '../../public/fonts/GreenBrooks.otf',
    variable: '--font-green-brooks'
})

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: "400", display: 'swap', variable: '--font-press-start' })

export const metadata = {
    title: 'Digex Society',
    description: 'Digexclan : The photography and film-making club at Delhi Public School R.K. Puram.',
}

export default function RootLayout({ children }) {

    const notification = "Hi-Res Prompts released for Digex 2024."
    const link = "/events/hires"

    return (
        <html lang="en">
            <body className={`${pressStart2P.variable} ${montserrat.variable} ${greenBrooks.variable}`}>

                <Cursor />

                <Notification notification={notification} link={link} />

                <main className="max-w-full w-[100vw] overflow-x-hidden flex flex-col items-center justify-center font-montserrat">
                    <Navbar notification={notification} />

                    {children}

                    <div className='z-10 max-w-full w-screen flex flex-col lg:flex-row justify-between items-center gap-3 py-4 sm:gap-5 lg:gap-0 lg:py-7 lg:px-24 mt-[200px] bgDot'>
                        <div className='flex-1 flex justify-start gap-7'>
                            <Link href="/" className='text-2xl' data-cursor-color="#1877F2"><SiFacebook /></Link>
                            <Link href="/" className='text-2xl' data-cursor-color="#d62976"><SiInstagram /></Link>
                            <Link href="/" className='text-2xl' data-cursor-color="#ff0000"><SiYoutube /></Link>
                        </div>
                        <div className='flex-1 flex justify-center items-center gap-2 sm:gap-4 font-montserrat text-white/70'>
                            <Link href="mailto:digex@dpsrkp.net" className='underline text-center text-sm sm:text-md text-white/90'>digex@dpsrkp.net</Link>
                            <p className='text-sm sm:text-md'>|</p>
                            <p className='text-sm sm:text-md'>All Rights Reserved &copy;</p>
                        </div>

                        <div className='flex-1 flex justify-end items-center gap-1 font-montserrat text-white/70'>
                            <p className='text-xs sm:text-sm'>Designed & Developed by</p>
                            <Link href="https://github.com/atharv777" target="_blank" className='text-sm text-white/85 hover:underline'>Atharv</Link>
                        </div>
                    </div>

                </main>
            </body>
        </html>
    )
}
