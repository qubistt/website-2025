import { Montserrat, Press_Start_2P } from 'next/font/google'
import './globals.css'
import Cursor from './components/Cursor'

import localFont from 'next/font/local'

const greenBrooks = localFont({
    src: '../../public/fonts/GreenBrooks.otf',
    variable: '--font-green-brooks'
})

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: "400", variable: '--font-press-start' })

export const metadata = {
    title: 'Digex Society',
    description: 'Digexclan : The photography and film-making club at Delhi Public School R.K. Puram.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${pressStart2P.variable} ${montserrat.variable} ${greenBrooks.variable}`}>
                {children}
                <Cursor />
            </body>
        </html>
    )
}
