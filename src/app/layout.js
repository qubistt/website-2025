import { Montserrat, Press_Start_2P } from 'next/font/google'
import localFont from 'next/font/local'
import Link from 'next/link';
import './globals.css'

import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si"

import Notification from '../components/Notification';
import Navbar from '../components/Navbar';

const greenBrooks = localFont({
    src: '../../public/fonts/GreenBrooks.otf',
    variable: '--font-green-brooks'
})

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', variable: '--font-montserrat' })
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: "400", display: 'swap', variable: '--font-press-start' })

export const metadata = {
    title: 'Digex Clan',
    description: 'Digex Clan : The premier photography and film-making club at Delhi Public School R.K. Puram.',
}

export default function RootLayout({ children }) {

    const notification = "Digex 2025 registrations open till 9th May!"
    const link = "/events"

    return (
        <html lang="en">
            <body className={`${pressStart2P.variable} ${montserrat.variable} ${greenBrooks.variable}`}>


                <Notification notification={notification} link={link} />

                <main className="max-w-full w-[100vw] overflow-x-hidden flex flex-col items-center justify-center font-montserrat">
                    <Navbar notification={notification} />

                    {children}

                    <div className='z-10 max-w-full w-screen flex flex-col lg:flex-row justify-between items-center gap-3 py-4 sm:gap-5 lg:gap-0 lg:py-7 lg:px-24 mt-[200px] bgDot'>
                        <div className='flex justify-start flex-1 gap-7'>
                            <Link href="https://www.facebook.com/digexsociety/" className='text-2xl' data-cursor-color="#1877F2"><SiFacebook /></Link>
                            <Link href="https://www.instagram.com/digexsociety/?hl=en" className='text-2xl' data-cursor-color="#d62976"><SiInstagram /></Link>
                            <Link href="https://www.youtube.com/@digexclan" className='text-2xl' data-cursor-color="#ff0000"><SiYoutube /></Link>
                        </div>
                        <div className='flex items-center justify-center flex-1 gap-2 sm:gap-4 font-montserrat text-white/70'>
                            <Link href="mailto:digex@dpsrkp.net" className='text-sm text-center underline sm:text-md text-white/90'>digex@dpsrkp.net</Link>
                            <p className='text-sm sm:text-md'>|</p>
                            <p className='text-sm sm:text-md'>All Rights Reserved &copy;</p>
                        </div>

                        <div className='flex items-center justify-end flex-1 gap-1 font-montserrat text-white/70'>

                        </div>
                    </div>

                </main>
            </body>
        </html>
    )
}
