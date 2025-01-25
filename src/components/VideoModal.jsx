import React from 'react';

function VideoModal({ video, onClose }) {
  return (
    <div className="video-modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Close</button>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoModal;
