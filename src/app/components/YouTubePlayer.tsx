import React from 'react';

interface YouTubePlayerProps {
  youtubeLink?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ youtubeLink }) => {
  return (
    <div className="relative w-full h-full">
        <iframe
        className="absolute top-0 left-0 w-full h-full z-10"
        width="100%"
        height="100%"
        src={youtubeLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
  </div>
  );
};

export default YouTubePlayer;
