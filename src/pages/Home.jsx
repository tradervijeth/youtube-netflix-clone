import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import CategoryTabs from '../components/CategoryTabs';
import SearchBar from '../components/SearchBar';
import { fetchTrendingVideos } from '../utils/api';

function Home() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchTrendingVideos().then(setVideos);
  }, []);

  return (
    <div className="home-page">
      <SearchBar onSearch={(query) => console.log(query)} />
      <CategoryTabs categories={['Music', 'Gaming', 'Sports']} onSelectCategory={(category) => console.log(category)} />
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => setSelectedVideo(video)} />
        ))}
      </div>
      {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </div>
  );
}

export default Home;
