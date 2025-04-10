import React, { useState } from 'react';

const RecentWork = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'erkz9gimk2leop1ztnmd',
      title: 'Project Showcase 1',
      description: 'Our latest creative work'
    },
    {
      id: 'brcseoyh5lpzobxqiomp',
      title: 'Product Demonstration',
      description: 'Detailed product features'
    },
    {
      id: 'fmdkdarbqprzghyhsy1a', 
      title: 'Client Testimonial',
      description: 'Customer success story'
    }
  ];

  // Handle video play/pause
  const handleVideoClick = (index) => {
    setActiveVideo(activeVideo === index ? null : index);
  };

  return (
    <section className="font-mont bg-black text-white pt-[120px] px-4 md:px-0 pb-20">
      <div className="container mx-auto flex flex-col gap-20 max-w-7xl">
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          Recent <span className="text-primary-500">Work</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={`video-${index}`}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-[#FF0066]"
              onClick={() => handleVideoClick(index)}
            >
              {/* Video Player with Proper Parameters */}
              <iframe
                src={`https://player.cloudinary.com/embed/?cloud_name=da4l4bhhn&public_id=${video.id}&profile=cld-default&autoplay=${activeVideo === index ? 'true' : 'false'}&muted=false&preload=auto&playsinline=1&controls=1`}
                className="w-full aspect-video"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title={`${video.title} - Video Player`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              
              {/* Play/Pause Overlay */}
              {activeVideo !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-semibold text-white">{video.title}</h3>
                <p className="text-sm text-gray-300">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;