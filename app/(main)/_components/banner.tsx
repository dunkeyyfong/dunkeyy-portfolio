import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[400px] mt-[6.2vh] w-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://dunkeyyfong.github.io/IMG_1881.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <div className="absolute inset-0 dark:bg-gray-900 bg-slate-400 opacity-75 backdrop-opacity-10"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-lg text-gray-100 uppercase mb-2 tracking-wide drop-shadow-md">
          Welcome to
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold text-white drop-shadow-xl">
          My home where I <span className="text-orange-400">stay</span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
