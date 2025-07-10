import React from 'react';
import ilmhub from '../video/ilmhub.mp4';
import ilmhub1 from '../video/ilmhub1.mp4';
import ilmhub2 from '../video/ilmhub2.mp4';
import ilmhub3 from '../video/ilmhub3.mp4';
import ilmhub4 from '../video/ilmhub4.mp4';
import ilmhub5 from '../video/ilmhub5.mp4';
import ilmhub6 from '../video/ilmhub6.mp4';
import ilmhub7 from '../video/ilmhub7.mp4';

const VideoCollection = () => {
  const videos = [
    { id: 1, src: ilmhub },
    { id: 2, src: ilmhub1 },
    { id: 3, src: ilmhub2 },
    { id: 4, src: ilmhub3 },
    { id: 5, src: ilmhub4 },
    { id: 6, src: ilmhub5 },
    { id: 7, src: ilmhub6 },
    { id: 8, src: ilmhub7 },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in"
          >
            <div className="w-full h-80 bg-black flex items-center justify-center">
              <video
                src={video.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCollection;