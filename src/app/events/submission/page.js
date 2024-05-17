'use client'

export default function Home() {

    return (
        <>
            <div className='w-screen h-screen absolute top-0 left-0 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4 w-max'>
                    <a target="_blank" href="https://forms.gle/tK3bmWpwYmn5CAun6" className='text-3xl text-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition w-full px-7 py-1 rounded-md' data-cursor-color="#fff">Phonescape</a>
                    <a target="_blank" href="https://forms.gle/3epRWF87UJGQqKet9" className='text-3xl text-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition w-full px-7 py-1 rounded-md' data-cursor-color="#fff">Camistic</a>
                    <a target="_blank" href="https://forms.gle/mWCyvrVSmqgoSFUj7" className='text-3xl text-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition w-full px-7 py-1 rounded-md' data-cursor-color="#fff">Creadive</a>
                    <a target="_blank" href="https://forms.gle/LD9f2hc8f4tfoLdR6" className='text-3xl text-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition w-full px-7 py-1 rounded-md' data-cursor-color="#fff">Pixelate Jr. </a>
                    <a target="_blank" href="https://forms.gle/HjP1xd37yFsNZANy8" className='text-3xl text-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.18)] transition w-full px-7 py-1 rounded-md' data-cursor-color="#fff">Pixelate Senior</a>
                </div>
            </div>
            <div className='h-[calc(100vh-330px)] w-1'></div>
        </>
    )
}