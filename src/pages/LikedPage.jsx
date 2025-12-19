// src/pages/LikedPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoPage.css';
import VideoCard from '../components/VideoCard';

function LikedPage() {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/likedVideos')
      .then((res) => setLikes(res.data))
      .catch((err) => console.error(err));
  }, []);

  const removeLike = (videoId) => {
    axios.delete(`http://localhost:3001/likedVideos/${videoId}`)
      .then(() => {
        setLikes(likes.filter((video) => video.id !== videoId));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="VideoPage">
      <h2>💖 찜한 운동 영상</h2>
      <div className="video-grid">
        {likes.length > 0 ? (
          likes.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isLiked={true}
              onToggleLike={() => removeLike(video.id)} // ✅ 해제 가능하게 연결
            />
          ))
        ) : (
          <p>찜한 영상이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default LikedPage;
