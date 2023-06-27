import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import VideoPedroBuerbaum from "./assets/video/modal/VideoPedroBuerbaum.mp4";

const VideoPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef(null);

  const toggleVolume = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <video
          ref={videoRef}
          src={VideoPedroBuerbaum}
          autoPlay
          loop
          muted={isMuted}
          className="mx-auto rounded-lg max-w-full h-auto border-2 border-white w-full"
          style={{ maxWidth: "400px" }}
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={toggleVolume}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isMuted ? (
            <FaVolumeMute className="h-5 w-5" />
          ) : (
            <FaVolumeUp className="h-5 w-5" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="ml-2"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
