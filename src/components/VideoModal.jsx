import React from 'react';

function VideoModal({ video, onClose }) {
  return (
    <div className="video-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="modal-content bg-white p-4 rounded-lg">
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
