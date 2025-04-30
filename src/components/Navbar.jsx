'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar({ notification }) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`z-10 fixed ${notification && scrollPosition <= 48 ? "top-[48px]" : "top-0"} transition left-0 max-w-full w-screen px-5 sm:px-14 md:px-24 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-7 lg:gap-0  py-4 xs:py-7 bgDot`}>
            <Link href="/" className='text-3xl font-greenBrooks'>
                <img src='/images/logo.png' style={{ height: "40px" }} className='object-scale-down'></img>
            </Link>
            <div className='flex items-center gap-4 xs:gap-5 sm:gap-7'>
                <Link href="/" className='text-[6px] xs:text-[7px] sm:text-[10px] font-pressStart'>Home</Link>
                <Link href="/gallery" className='text-[6px] xs:text-[7px] sm:text-[10px] font-pressStart'>Gallery</Link>
                <Link href="/events" className='text-[6px] xs:text-[7px] sm:text-[10px] font-pressStart'>Events</Link>
                <Link href="/members" className='text-[6px] xs:text-[7px] sm:text-[10px] font-pressStart'>Members</Link>
                <Link href="/alumni" className='text-[6px] xs:text-[7px] sm:text-[10px] font-pressStart'>Alumni</Link>
            </div>
        </div>
    )
}
