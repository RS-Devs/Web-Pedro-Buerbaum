import { useState, useEffect } from "react";
import pedro from "./assets/img/pedro.png";
import pedroSmoke from "./assets/img/pedroSmoke.png";
import "animate.css";
import BackgroundVideo from "./BackgroundVideo";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setVideoLoaded(true);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosingModal(false);
    }, 1000);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-transparent text-white overflow-auto"
      style={{ maxHeight: "100vh", overflowY: "auto", position: "relative" }}
    >
      {videoLoaded && <BackgroundVideo />}

      <div className="container mt-10 mx-auto h-screen flex flex-col items-center justify-center text-center z-10">
        <img
          src={pedro}
          alt="Foto de Pedro Buerbaum"
          className={`w-48 mb-14 md:w-64 lg:w-80 h-auto rounded-full animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow ${
            videoLoaded ? "" : "hidden"
          }`}
        />
        <h1 className={`text-3xl mb-10 bg-black sm:text-3xl md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeInDown animate__delay-2s animate__slow ${
            videoLoaded ? "" : "hidden"
          }`}>
          Pedro Buerbaum
        </h1>

        <button
          onClick={openModal}
          className={`bg-white text-black font-bold py-2 mb-6 px-4 rounded-full border-4 border-gray-900 animate__animated animate__fadeInDown animate__delay-3s animate__slow hover:bg-gray-900 hover:text-white hover:border-white ${
            videoLoaded ? "" : "hidden"
          }`}
        >
          Conóceme
        </button>

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div
              className="fixed inset-0 bg-black opacity-75"
              onClick={closeModal}
            ></div>
            <div
              className={`bg-black rounded-lg shadow-lg p-2 sm:p-4 md:p-6 lg:p-8 z-30 max-h-screen max-w-xs sm:max-w-md mx-auto border-4 border-white animate__animated animate__fadeInDown animate__slow ${
                isClosingModal ? "animate__fadeOutDown" : "animate__fadeIn"
              } animate__fadeInDown animate__slow ${
                window.innerWidth <= 1440 ? "overflow-auto hide-scrollbar" : ""
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white">
                  <img
                    src={pedroSmoke}
                    alt="Pedro"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm lg:text-base bg-black mb-2 text-justify animate__animated animate__fadeInDown animate__delay1s animate__slow">
                  Soy Pedro Buerbaum, un emprendedor apasionado e incansable por
                  naturaleza. A lo largo de mi trayectoria, he tenido el
                  privilegio de fundar negocios en diversos ámbitos, lo cual me
                  ha brindado una perspectiva amplia y me ha exigido ser
                  altamente versátil. Durante este recorrido, he descubierto que
                  el cuidado personal, tanto interno como externo, es la clave
                  fundamental para alcanzar el éxito en todas las áreas de la
                  vida.
                </p>
              </div>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm lg:text-base bg-black mb-4 text-justify animate__animated animate__fadeInDown animate__delay-2s animate__slow">
                  En mi contenido, puedes esperar una orientación centrada en el
                  emprendimiento, las finanzas, la productividad, el bienestar y
                  el estilo de vida. Estaré encantado de compartir
                  conocimientos, consejos y recursos para ayudarte a alcanzar
                  tus metas y encontrar el equilibrio necesario para prosperar
                  en todos los aspectos de tu vida. ¡Acompáñame en este
                  apasionante viaje hacia el crecimiento personal y profesional!
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-white font-bold text-lg"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
