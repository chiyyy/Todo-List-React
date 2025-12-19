// src/pages/VideoPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './VideoPage.css';
import VideoCard from '../components/VideoCard';
import videoList from '../data/VideoList';

function VideoPage() {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/likedVideos')
      .then(res => setLikes(res.data))
      .catch(err => console.error(err));
  }, []);

  const toggleLike = (video) => {
    const alreadyLiked = likes.find((v) => v.id === video.id);

    if (alreadyLiked) {
      axios.delete(`http://localhost:3001/likedVideos/${video.id}`)
        .then(() => setLikes(likes.filter((v) => v.id !== video.id)));
    } else {
      axios.post('http://localhost:3001/likedVideos', video)
        .then(() => setLikes([...likes, video]));
    }
  };

  return (
    <div className="VideoPage">
      <h2>🎥 추천 운동 영상</h2>
      <div className="video-grid">
        {videoList.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isLiked={likes.some((v) => v.id === video.id)}
            onToggleLike={() => toggleLike(video)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
