import React from 'react';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} className="w-full" />
      <div className="p-2">
        <h3 className="text-white">{video.title}</h3>
        <p className="text-gray-400">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
