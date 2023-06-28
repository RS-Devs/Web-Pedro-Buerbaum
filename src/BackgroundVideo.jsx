import { useEffect, useState } from "react";
import bgWaves from "./assets/video/bgWaves.mp4";

const BackgroundVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };

    const videoElement = document.getElementById("bg-video");
    videoElement.addEventListener("loadeddata", handleVideoLoad);

    return () => {
      videoElement.removeEventListener("loadeddata", handleVideoLoad);
    };
  }, []);

  return (
    <video
      id="bg-video"
      src={bgWaves}
      autoPlay
      muted
      loop
      className={`fixed bottom-0 top-0 left-0 w-full h-full object-cover z-0 ${
        videoLoaded ? "" : "hidden"
      }`}
    />
  );
};

export default BackgroundVideo;
