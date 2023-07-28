import React from 'react';

interface YouTubePlayerProps {
  youtubeLink?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ youtubeLink }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <iframe
        className="w-full h-full"
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
