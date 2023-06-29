import bgImg from "./assets/img/bgImg.png";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    
    <div className="background-video-container">
      <img src={bgImg} alt="Pedro en la costa" className="background-image" />
      <div className="fire-embers"></div>
    </div>
  );
};

export default BackgroundVideo;