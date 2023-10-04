import React from 'react';

const VideoPlayer = () => {
//   const videoUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';
  const videoUrl = 'https://www.youtube.com/watch?v=6rMVDD-VWkU';

  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([\w-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(videoUrl);

  return (
    <div className="video-player">
      <h1>YouTube Video Player</h1>
      {videoId ? (
        <iframe
          title="YouTube Video Player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid YouTube video URL</p>
      )}
    </div>
  );
};

export default VideoPlayer;

