import bgWaves from "./assets/video/bgWaves.mp4";
import pedro from "./assets/img/pedro.webp";
import "animate.css";


const MainPage = () => {
  return (
    <div className="relative flex flex-col items-center h-screen w-screen justify-center bg-transparent text-white">
      <video
        src={bgWaves}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute flex flex-col items-center max-w-3xl text-center px-4 z-9">
        <img
          src={pedro}
          alt="Foto de Pedro Buerbaum"
          className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/2 h-auto rounded-full mb-8 animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow"
        />
        <h1 className="text-4xl font-bold mb-4 bg-black animate__animated animate__fadeInDown  animate__delay-2s animate__slow">
          Pedro Buerbaum
        </h1>
        <p className="text-lg mb-4 text-justify bg-black animate__animated animate__fadeInDown  animate__delay-3s animate__slow">
          Soy Pedro Buerbaum, un emprendedor apasionado e incansable por
          naturaleza. A lo largo de mi trayectoria, he tenido el privilegio de
          fundar negocios en diversos ámbitos, lo cual me ha brindado una
          perspectiva amplia y me ha exigido ser altamente versátil. Durante
          este recorrido, he descubierto que el cuidado personal, tanto interno
          como externo, es la clave fundamental para alcanzar el éxito en todas
          las áreas de la vida.
        </p>
        <p className="text-lg mb-4 text-justify bg-black animate__animated animate__fadeInDown  animate__delay-4s animate__slow">
          En mi contenido, puedes esperar una orientación centrada en el
          emprendimiento, las finanzas, la productividad, el bienestar y el
          estilo de vida. Estaré encantado de compartir conocimientos, consejos
          y recursos para ayudarte a alcanzar tus metas y encontrar el
          equilibrio necesario para prosperar en todos los aspectos de tu vida.
          ¡Acompáñame en este apasionante viaje hacia el crecimiento personal y
          profesional!
        </p>
      </div>
    </div>
  );
};

export default MainPage;
