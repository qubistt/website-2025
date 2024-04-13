'use client'
import React, { useState, useEffect } from 'react';
import { CgArrowTopRight } from "react-icons/cg";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveredElement, setHoveredElement] = useState(null);
    const [cursorColor, setCursorColor] = useState(null);

    useEffect(() => {

        // document.body.style.cursor = "none"

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', onMouseMove);

        const handleMouseEnter = (e) => {
            if (e.target.hasAttribute("data-no-blend")) {
                setHoveredElement("data-no-blend");
            }
            else {
                setHoveredElement(e.target.tagName);
            }
            if (e.target.getAttribute("data-cursor-color")) {
                setCursorColor(e.target.getAttribute("data-cursor-color"))
            }
            else {
                setCursorColor("#60a5fa")
            }
        };
        const handleMouseLeave = () => {
            setHoveredElement(null);
            setCursorColor("#60a5fa")
        };

        const elems = document.querySelectorAll('a, button, img, [data-no-blend]');
        elems.forEach((elem) => {
            elem.addEventListener('mouseenter', handleMouseEnter);
            elem.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            elems.forEach((elem) => {
                elem.removeEventListener('mouseenter', handleMouseEnter);
                elem.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                className={`z-10 w-3 h-3 fixed flex justify-center items-center p-[1px] rounded-full pointer-events-none transition duration-300 -translate-x-1/2 -translate-y-1/2 ${hoveredElement == "data-no-blend" ? "bg-white mix-blend-normal" : hoveredElement == "BUTTON" || hoveredElement == "A" ? `scale-[350%] mix-blend-normal` : "bg-white mix-blend-difference"}`}
                style={{ left: `${position.x}px`, top: `${position.y}px`, backgroundColor: hoveredElement == "BUTTON" || hoveredElement == "A" ? cursorColor : "#fff" }}
            >
                {
                    hoveredElement == "BUTTON" || hoveredElement == "A"
                        ? <CgArrowTopRight color='#000' />
                        : null
                }
            </div>

            <div
                className={`z-10 w-14 h-14 fixed top-0 left-0 rounded-full pointer-events-none transition duration-150 ease-linear -translate-x-1/2 -translate-y-1/2 border border-white`}
                style={{ transform: hoveredElement && hoveredElement != "data-no-blend" ? `translate3d(${position.x - 28}px, ${position.y - 28}px, 0) scale(2)` : `translate3d(${position.x - 28}px, ${position.y - 28}px, 0)` }}
            >
            </div>
        </>
    );
};

export default Cursor;