import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Masonry } from 'react-plock';

export default function Gallery() {
    const [images, setImages] = useState([])
    useEffect(() => {
        (async () => {
            const resp = await fetch("/api");
            const results = await resp.json();

            let reducedResults = [];
            let i = 0;
            for (let result of results.resources) {
                reducedResults.push({
                    id: i,
                    height: result.height,
                    width: result.width,
                    public_id: result.public_id,
                    src: ""
                });
                i++;
            }

            const blurImagePromises = results.resources.map(async (image, i) => {
                const response = await fetch(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_50/${image.public_id}.webp`);
                const buffer = await response.arrayBuffer();
                const base64 = Buffer.from(buffer).toString("base64")
                reducedResults[i].src=`data:image/jpeg;base64,${base64}?random=+${Math.random()}`
                return `data:image/jpeg;base64,${base64}?random=`+Math.random();
            });
            const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

            for (let i = 0; i < reducedResults.length; i++) {
                reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
            }

            for (let i = reducedResults.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [reducedResults[i], reducedResults[j]] = [reducedResults[j], reducedResults[i]];
            }
            setImages(reducedResults)
        })();

    }, [])

    if (!images || !images.length) {
        return <div className='mt-48 flex flex-col items-center'>
            <div class="flex flex-row gap-2 mb-4">
                <div class="w-4 h-4 rounded-full bg-gray-300 animate-pulse [animation-duration:0.7s]"></div>
                <div class="w-4 h-4 rounded-full bg-gray-300 animate-pulse [animation-duration:0.7s] [animation-delay:.2s]"></div>
                <div class="w-4 h-4 rounded-full bg-gray-300 animate-pulse [animation-duration:0.7s] [animation-delay:.4s]"></div>
            </div>
            <p className='text-lg'>Loading images...</p>
        </div>;
    }

    return (
        <Masonry
            className='px-5'
            items={images}
            config={{
                columns: [1, 2, 3],
                gap: [15, 19, 24],
                media: [640, 1024, 1280],
            }}
            render={({ id, public_id, blurDataUrl, src }) => {
                setTimeout(()=>{
                    var image_dom=document.getElementById("img_"+id)
                    image_dom.onload=async ()=>{
                        console.log("Loaded")
                        images[id].src=`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${images[id].public_id}.webp`
                        setImages(images)
                        image_dom.style.display=""
                    }
                    image_dom.src=images[id].src
                }, 100)
                return <img
                    key={id}
                    id={"img_"+id}
                    alt="Picture by Digex Clan"
                    className="transform rounded-lg brightness-100 transition will-change-auto hover:brightness-[1.2]"
                    style={{ transform: "translate3d(0, 0, 0)", width:"720px", display:"none" }}
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    data-cursor-color="#ff00c3"
                    onClick={() => { window.open(`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/${public_id}.jpg`) }}
                />
            }}
        />
    )
}