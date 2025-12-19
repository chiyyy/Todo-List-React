// src/components/VideoCard.jsx
import './VideoCard.css';

function VideoCard({ video, isLiked, onToggleLike }) {
  return (
    <div className="video-card">
      <iframe
        src={video.url}
        title={video.title}
        allowFullScreen
      ></iframe>
      <h4>{video.title}</h4>
      <p>{video.category}</p>
      <button onClick={() => onToggleLike(video)}>
        {isLiked ? '❤️ 찜함' : '🤍 찜하기'}
      </button>
    </div>
  );
}

export default VideoCard;
