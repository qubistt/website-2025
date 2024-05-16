import Link from 'next/link'
import React from 'react'

export default function Notification({ notification, link }) {
    return (
        <div className='w-screen px-1 py-2 xs:py-3 bg-yellow-300 z-[50] relative font-bold text-black text-center text-xs sm:text-base'>{notification} <Link href={link} className='underline font-extrabold'>Learn More</Link></div>
    )
}
