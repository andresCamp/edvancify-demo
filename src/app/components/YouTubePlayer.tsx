import React from 'react';

interface YouTubePlayerProps {
  youtubeLink?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ youtubeLink }) => {
  return (
    <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="100%"
        height="100%"
        src={youtubeLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>
  );
};

export default YouTubePlayer;
