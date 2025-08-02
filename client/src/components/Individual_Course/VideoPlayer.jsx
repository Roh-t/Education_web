const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full max-w-4xl aspect-video mx-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
