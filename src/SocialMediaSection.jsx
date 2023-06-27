import bgWaves from "./assets/video/bgWaves.mp4";
import { FaYoutube, FaPodcast, FaInstagram, FaTiktok } from "react-icons/fa";
import "animate.css";

import pedro from "./assets/img/social-media/pedro.webp";
import worldcast from "./assets/img/social-media/worldcast.webp";

const SocialMediaSection = () => {
  return (
    <div
      className="bg-gray-100 p-6 flex flex-col items-center "
      style={{ maxHeight: "100vh", overflowY: "auto", position: "relative" }}
    >
      <video
        src={bgWaves}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-screen object-cover z-0"
      />

      <h3 className="text-4xl text-white font-bold mb-4 z-10 animate__animated animate__fadeInDown animate__slow">
        Redes Sociales
      </h3>
      <div className="space-y-4 mt-10 z-9 ">
        <div
          className="bg-red-600 p-4 rounded-full shadow-md flex flex-col items-center border-2 border-white animate__animated animate__fadeIn animate__fadeInLeft"
          style={{ boxShadow: "0 0 30px #ff0000" }}
        >
          <img
            className="w-20 h-20 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow"
            src={pedro}
            alt="Youtube"
          />
          <FaYoutube className="text-white text-4xl mb-4 animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slower" />
          <div className="text-center">
            <a
              className="text-blue-500 hover:underline bg-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slower"
              href="https://www.youtube.com/@PedroBuerbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              @PedroBuerbaum
            </a>
            <p className="text-white font-bold p-5 animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slow">
              Sigue mi canal de YouTube para obtener contenido educativo y
              entretenido sobre diversos temas.
            </p>
            <button className="mt-2 bg-black border-2 border-white hover:bg-red-500 hover:scale-110 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slow">
              <a
                href="https://www.youtube.com/@PedroBuerbaum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suscribirse
              </a>
            </button>
          </div>
        </div>
        <div
          className="bg-black z-10 p-4 rounded-full shadow-md flex flex-col items-center border-2 border-white animate__animated animate__fadeIn animate__fadeInRight animate__delay-2s"
          style={{ boxShadow: "0 0 30px #000000" }}
        >
          <img
            className="w-20 h-20 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-2s animate__slow"
            src={worldcast}
            alt="Podcast"
          />
          <FaPodcast className="text-white text-4xl mb-4 animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow" />
          <div className="text-center">
            <a
              className="text-blue-500 hover:underline bg-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow"
              href="https://www.instagram.com/worldcast_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @worldcast_
            </a>
            <p className="text-white font-bold p-5 animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slow">
              Únete a mi podcast donde discuto temas actuales y entrevisto a
              expertos en diferentes campos.
            </p>
            <button className="mt-2 bg-black border-2 border-white hover:bg-blue-600 hover:scale-110 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slower">
              <a
                href="https://linktr.ee/worldcast"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escuchar
              </a>
            </button>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 z-10 p-4 rounded-full shadow-md flex flex-col items-center border-2 border-white animate__animated animate__fadeIn animate__fadeInLeft animate__delay-3s"
          style={{ boxShadow: "0 0 30px #b82bff" }}
        >
          <img
            className="w-20 h-20 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow"
            src={pedro}
            alt="Instagram"
          />
          <FaInstagram className="text-white text-4xl mb-4 animate__animated animate__fadeIn animate__fadeInDown animate__delay-4s animate__slow" />
          <div className="text-center">
            <a
              className="text-blue-500 hover:underline bg-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-4s animate__slow"
              href="https://www.instagram.com/pedrobuerbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pedrobuerbaum
            </a>
            <p className="text-white font-bold p-5 animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slow">
              Sígueme en Instagram para ver fotos y videos exclusivos detrás de
              escena de mis proyectos y viajes.
            </p>
            <button className="mt-2 bg-black border-2 border-white hover:bg-purple-600 hover:scale-110 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slower">
              <a
                href="https://www.instagram.com/pedrobuerbaum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir
              </a>
            </button>
          </div>
        </div>
        <div
          className="bg-white z-10 p-4 rounded-full shadow-md flex flex-col items-center border-2 border-white animate__animated animate__fadeIn animate__fadeInRight animate__delay-4s"
          style={{ boxShadow: "0 0 30px #ffffff" }}
        >
          <img
            className="w-20 h-20 rounded-full mb-4 border-2 border-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s"
            src={pedro}
            alt="TikTok"
          />
          <FaTiktok className="text-black text-4xl mb-4 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow" />
          <div className="text-center">
            <a
              className="text-blue-500 hover:underline bg-red-500 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slower"
              href="https://www.tiktok.com/@pedrobuerbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pedrobuerbaum
            </a>
            <p className="text-black font-bold p-5 animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slow">
              Sigue mi perfil de TikTok para ver videos cortos y entretenidos.
            </p>
            <button className="mt-2 bg-red-500 border-2 border-black hover:bg-red-600 hover:scale-110 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower">
              <a
                href="https://www.tiktok.com/@pedrobuerbaum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir
              </a>
            </button>
          </div>
        </div>

        <div
          className="bg-blue-500 z-10 p-4 rounded-full shadow-md flex flex-col items-center border-2 border-white animate__animated animate__fadeIn animate__fadeInLeft animate__delay-5s"
          style={{ boxShadow: "0 0 30px #ffffff" }}
        >
          <img
            className="w-20 h-20 rounded-full mb-4 border-2 border-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s"
            src={pedro}
            alt="TikTok"
          />
          <FaTiktok className="text-black text-4xl mb-4 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow" />
          <div className="text-center">
            <a
              className="text-blue-500 hover:underline bg-red-500 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slower"
              href="https://www.tiktok.com/@pedrobuerbaum"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pedrobuerbaum
            </a>
            <p className="text-black font-bold p-5 animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slow">
              Sigue mi perfil de TikTok para ver videos cortos y entretenidos.
            </p>
            <button className="mt-2 bg-red-500 border-2 border-black hover:bg-red-600 hover:scale-110 text-white font-bold py-2 px-4 rounded-full animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower">
              <a
                href="https://www.tiktok.com/@pedrobuerbaum"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir
              </a>
            </button>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default SocialMediaSection;
