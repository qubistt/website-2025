import React from 'react'

export default function Button(props) {
    return (
        <button className={`bg-white text-black rounded-sm px-7 py-2 relative buttonCorners ${props.wfull ? "w-full" : ""}`}>
            {props.children}
        </button>
    )
}
