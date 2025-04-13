import React from "react";
import { useEffect, useState } from "react";

export default function VirtualPet() {
    const [frame, setFrame] = useState(0); //used to control which part of the sprite sheet is visible
    const totalFrames = 4; // how many frames are in the sprite sheet
    const frameWidth = 32; // height of frame in pixels

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % totalFrames);
        }, 200); // frame change every 200ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-8 h-8 scale-500 md:scale-600 lg:scale-700 bg-[url('/sprites/CatSlimeIdle.png')] bg-no-repeat mx-auto my-40"
            style={{
                backgroundPosition: `-${frame * frameWidth}px 0px`,
                imageRendering: 'pixelated',
            }}
        />
    );
}