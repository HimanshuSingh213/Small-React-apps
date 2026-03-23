import React, { useRef, useState } from 'react';
import lordVideo from '../assets/lordvideo.mp4'

function VideoPlayer() {
    const [hasStarted, setHasStarted] = useState(false);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    if (!hasStarted) {
        return (
            <div className="flex items-center justify-center w-[200px] h-auto bg-neutral-950">
                <button
                    onClick={() => setHasStarted(true)}
                    className="px-8 py-4 bg-[#f97316] text-white text-xl font-bold rounded-xl shadow-lg hover:bg-[#ea580c] hover:scale-105 transition-all cursor-pointer animate-pulse"
                >
                    Play Video
                </button>
            </div>
        );
    }

    return (
        <video
            ref={videoRef}
            src={lordVideo}
            onEnded={handleVideoEnd}
            autoPlay playsInline
            width={350}
        />
    );
}

export default VideoPlayer;