import React from 'react';

const Banner = () => {
    return (
        <div className="relative h-[60vh] w-full"> {/* Thu nhỏ chiều cao */}
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/IMG_1881.mp4"
                loop
                muted
                playsInline
                autoPlay
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h2 className="text-lg text-gray-300 uppercase mb-2 tracking-wide drop-shadow-md">
                    Welcome to
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
                    A curated list of the tech I <span className="text-orange-400">use</span>
                </h1>
                <p className="text-gray-400 mt-4 max-w-3xl drop-shadow-sm">
                    As an indie developer, I've been spending hours and hours at my desk every day. So, I've been continuously improving my workspace in order to boost my productivity.
                </p>
            </div>
        </div>
    );
};

export default Banner;
