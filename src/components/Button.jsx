import { useRouter } from 'next/navigation';
import React from 'react';

export default function Button(props) {

    const router = useRouter();

    return (
        <button onClick={() => { router.push(props.href) }} className={`bg-white text-black rounded-sm px-7 py-2 relative buttonCorners ${props.wfull ? "w-full" : ""}`}>
            {props.children}
        </button>
    )
}
