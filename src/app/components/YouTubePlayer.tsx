import React from 'react';

interface YouTubePlayerProps {
  youtubeLink?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ youtubeLink }) => {
  return (
    <div tabIndex={0}>
      <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="100%"
          height="100%"
          src={`${youtubeLink}?disablekb=1`} // Add the disablekb parameter here
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;
