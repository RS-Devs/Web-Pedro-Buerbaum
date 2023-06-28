import { useState, lazy, Suspense } from "react";
import { FaVolumeMute, FaVolumeUp, FaChevronDown } from "react-icons/fa";
import audioFile from "./assets/audio/audio.mp3";

import "animate.css";

const MainPage = lazy(() => import("./MainPage"));
const ProjectsSection = lazy(() => import("./ProjectSection"));
const SocialMediaSection = lazy(() => import("./SocialMediaSection"));
const ContactSection = lazy(() => import("./ContactSection"));

const App = () => {
  const [currentPage, setCurrentPage] = useState("main");
  const [showButtons, setShowButtons] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowButtons(false);
  };

  const handleMenuToggle = () => {
    setShowButtons(!showButtons);
  };

  const handleVolumeControlToggle = () => {
    setIsMuted(!isMuted);
    setShowVolumeControl(false);
  };

  const handleVolumeIconClick = () => {
    if (isMuted) {
      setShowVolumeControl(!showVolumeControl);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    const audio = document.getElementById("audio");
    audio.volume = newVolume;
  };

  return (
    <div className="bg-transparent h-screen overflow-hidden relative">
      <div className="flex flex-col items-end absolute top-0 right-0 z-50 animate__animated animate__fadeIn animate__fadeInRight animate__delay-5s animate__slow">
        <button
          className="p-2 rounded-full bg-black border-2 border-white text-white hover:bg-white hover:text-black hover:border-black mr-4 mt-4"
          onClick={handleMenuToggle}
        >
          Menu
        </button>
        <div className="relative">
          <button
            className="p-2 rounded-full bg-black border-2 border-white text-white hover:bg-white hover:text-black hover:border-black mr-4 mt-4"
            onClick={handleVolumeControlToggle}
          >
            {isMuted ? <FaVolumeUp size={20} /> : <FaVolumeMute size={20} />}
          </button>
          {isMuted && (
            <div className="relative top-3 right-0 ">
              <FaChevronDown
                size={20}
                onClick={handleVolumeIconClick}
              />
            </div>
          )}
        </div>
        {isMuted && (
          <audio id="audio" autoPlay>
            <source src={audioFile} type="audio/mpeg" />
          </audio>
        )}
        <div
          className={`absolute top-0 right-0 mt-4 mr-4 ${
            showButtons ? "z-10" : "hidden"
          }`}
        >
          {showButtons && (
            <>
              <button
                className={`p-2 rounded-full ${
                  currentPage === "main"
                    ? "bg-black text-white border-2 border-white"
                    : "bg-white text-black border-2 border-black"
                } hover:bg-black hover:text-white hover:border-black`}
                onClick={() => handlePageChange("main")}
              >
                Presentación
              </button>
              <button
                className={`p-2 rounded-full ${
                  currentPage === "projects"
                    ? "bg-black text-white border-2 border-white"
                    : "bg-white text-black border-2 border-black"
                } hover:bg-black hover:text-white hover:border-black`}
                onClick={() => handlePageChange("projects")}
              >
                Proyectos
              </button>
              <button
                className={`p-2 rounded-full ${
                  currentPage === "socialMedia"
                    ? "bg-black text-white border-2 border-white"
                    : "bg-white text-black border-2 border-black"
                } hover:bg-black hover:text-white hover:border-black`}
                onClick={() => handlePageChange("socialMedia")}
              >
                Redes
              </button>
              <button
                className={`p-2 rounded-full ${
                  currentPage === "contact"
                    ? "bg-black text-white border-2 border-white"
                    : "bg-white text-black border-2 border-black"
                } hover:bg-black hover:text-white hover:border-black`}
                onClick={() => handlePageChange("contact")}
              >
                Contacto
              </button>
            </>
          )}
        </div>
        {showVolumeControl && isMuted && (
          <div className="relative right-0 mr-4 mt-4">
            <div className="bg-black border-2 border-white text-white p-2 mt-1 rounded-full transition z-10">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-16 h-2 bg-black"
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        )}
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-black"></div>
        }
      >
        {currentPage === "main" && (
          <MainPage className="absolute top-0 left-0 w-full h-full z-0" />
        )}
        {currentPage === "projects" && <ProjectsSection />}
        {currentPage === "socialMedia" && <SocialMediaSection />}
        {currentPage === "contact" && <ContactSection />}
      </Suspense>
    </div>
  );
};

export default App;
