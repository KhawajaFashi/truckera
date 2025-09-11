// app/components/HeroVideo.jsx
'use client'; // This directive marks the component for client-side rendering.

import { useRef, useEffect } from 'react';

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2; // Set the playback speed.
        }
    }, []);


    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            ref={videoRef}
        >
            <source src="/hero-sec-vid.mp4" type="video/mp4" />
        </video>
    );
}
