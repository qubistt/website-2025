import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, stagger, useAnimate } from 'framer-motion';

export default function Card({ data }) {

    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    return (
        <div className={`relative p-[2.5px] group`}>
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
                className="absolute inset-0 rounded-[12px] z-[1] will-change-transform group-hover:[backgroundImage:var(--border-bg)] transition duration-500"
            />

            <div className="relative z-[5] rounded-[10px] w-full flex flex-col justify-center items-center p-5 bg-[#ffffff0d] group-hover:bg-[#000000e3] border border-white/20 group-hover:border-none">
                {/* <div className="w-full px-[33%] py-5 mb-3 [background:url('/images/grid.svg')_no-repeat_center_center] [backgroundSize:50%]">
                    <Image
                        src={data.image}
                        width={300}
                        height={300}
                        className='rounded-full aspect-square object-cover'
                        data-no-blend={true}
                    />
                </div> */}

                {/* <TextGenerate words="Aikagra is a femboy and he love 5 year old girls" /> */}

                <p className='text-xl font-medium'>{data.name}</p>
                <p className='text-md font-extralight'>{data.role}</p>
            </div>
        </div>
    )
}

const TextGenerate = ({ words }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 1.5,
                delay: stagger(0.3),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-white opacity-0"
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className="mb-10 px-5">
            <div className="mt-4">
                <div className=" text-white text-2xl font-greenBrooks text-center">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
