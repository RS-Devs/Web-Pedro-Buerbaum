import {
  FaInstagram,
  FaGlobe,
  FaYoutube,
  FaArrowRight,
  FaEye,
  FaVolumeUp,
} from "react-icons/fa";
import bgWaves from "./assets/video/bgWaves.mp4";


import lapolleria from "./assets/img/projects/lapolleria.webp";
import laconeria from "./assets/img/projects/laconeria.webp";
import thecockery from "./assets/img/projects/thecockery.webp";
import fulkon from "./assets/img/projects/fulkon.webp";
import worldcast from "./assets/img/projects/worldcast.webp";
import Origen from "./assets/img/projects/Origen.webp";

import lapolleria2 from "./assets/img/modals/lapolleria2.webp";
import laconeria2 from "./assets/img/modals/laconeria2.webp";
import thecockery2 from "./assets/img/modals/thecockery2.webp";
import fulkon2 from "./assets/img/modals/fulkon2.webp";
import worldcast2 from "./assets/img/modals/worldcast2.webp";
import VideoPedroBuerbaum from "./assets/video/modal/VideoPedroBuerbaum.mp4";

import cerrar from "./assets/img/modals/icons/cerrar.webp";


import "animate.css";
import { useState } from "react";

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);
  const [isFifthModalOpen, setIsFifthModalOpen] = useState(false);
  const [isSixthModalOpen, setIsSixthModalOpen] = useState(false);

  const [isClosingModal, setIsClosingModal] = useState(false);
  const [isClosingSecondModal, setIsClosingSecondModal] = useState(false);
  const [isClosingThirdModal, setIsClosingThirdModal] = useState(false);
  const [isClosingFourthModal, setIsClosingFourthModal] = useState(false);
  const [isClosingFifthModal, setIsClosingFifthModal] = useState(false);
  const [isClosingSixthModal, setIsClosingSixthModal] = useState(false);




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosingModal(false);
    }, 1000); 
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsClosingSecondModal(true);
    setTimeout(() => {
      setIsSecondModalOpen(false);
      setIsClosingSecondModal(false);
    }, 1000); 
  };
  

  const openThirdModal = () => {
    setIsThirdModalOpen(true);
  };

  const closeThirdModal = () => {
    setIsClosingThirdModal(true);
    setTimeout(() => {
      setIsThirdModalOpen(false);
      setIsClosingThirdModal(false);
    }, 1000); 
  };
  
  const openFourthModal = () => {
    setIsFourthModalOpen(true);
  };

  const closeFourthModal = () => {
    setIsClosingFourthModal(true);
    setTimeout(() => {
      setIsFourthModalOpen(false);
      setIsClosingFourthModal(false);
    }, 1000); 
  };
  

  const openFifthModal = () => {
    setIsFifthModalOpen(true);
  };

  const closeFifthModal = () => {
    setIsClosingFifthModal(true);
    setTimeout(() => {
      setIsFifthModalOpen(false);
      setIsClosingFifthModal(false);
    }, 1000); 
  };
  

  const openSixthModal = () => {
    setIsSixthModalOpen(true);
  };

  const closeSixthModal = () => {
    setIsClosingSixthModal(true);
    setTimeout(() => {
      setIsSixthModalOpen(false);
      setIsClosingSixthModal(false);
    }, 1000); 
  };
  
  return (
    <div
      className="py-8 pt-14 grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-10 lg:px-20 relative"
      style={{ maxHeight: "100vh", overflowY: "auto", position: "relative" }}
    >
      <video
        src={bgWaves}
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-screen  object-cover z-0"
      />

      <div className="bg-pink-200 border-2 border-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInLeft   animate__slow">
        <img
          src={lapolleria}
          alt="La Pollería"
          className="w-24 h-24 rounded-full mb-4 border-2 border-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow">
          La Pollería
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInDown animate__delay-1s animate__slow">
          Red de tiendas propias + franquicias (más de 20 aperturas).
        </p>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slow">
          La Pollería es una original tienda de gofres con una temática
          divertida y atrevida. Sus gofres tienen una forma que se asemeja a un
          pene, lo cual los hace únicos y llamativos. Además de su forma
          peculiar, ofrecen una amplia variedad de chocolates y toppings para
          personalizar tu gofre de manera deliciosa. La Pollería es el lugar
          perfecto para aquellos que buscan una experiencia culinaria única y
          divertida.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slower cursor-pointer"
            onClick={openModal}
          />
        </div>

        <div className="flex mt-4 ">
          <a
            href="https://www.instagram.com/lapolleriaoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slower" />
          </a>
          <a
            href="https://lapolleriaoriginal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-1s animate__slower" />
          </a>
        </div>
      </div>
      <div className="bg-blue-200 border-2 border-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInRight animate__delay-1s  animate__slow">
        <img
          src={laconeria}
          alt="La Coñería"
          className="w-24 h-24 rounded-full mb-4 border-2 border-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-2s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-2s animate__slow">
          La Coñería
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInDown animate__delay-2s animate__slow">
          Por petición popular... La Pollería necesitaba contrapartida.
        </p>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slow">
          La Coñería es una tienda de gofres que rompe los moldes convencionales
          al ofrecer gofres con forma de vagina. Su concepto audaz y divertido
          busca desafiar las normas y brindar una experiencia inusual. Con una
          variedad de opciones de chocolates y toppings, puedes personalizar tu
          gofre para disfrutar de un sabor delicioso y una presentación fuera de
          lo común. La Coñería es un lugar único y divertido para los amantes de
          los gofres y aquellos que buscan algo diferente en su experiencia
          culinaria.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slower cursor-pointer"
            onClick={openSecondModal}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://www.instagram.com/laconeriaoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slower" />
          </a>
          <a
            href="https://lapolleriaoriginal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-2s animate__slower" />
          </a>
        </div>
      </div>
      <div className="bg-pink-300 border-2 border-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInLeft animate__delay-2s  animate__slow">
        <img
          src={thecockery}
          alt="The Cockery"
          className="w-24 h-24 rounded-full mb-4 border-2 border-black animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow">
          The Cockery
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInDown animate__delay-3s animate__slow">
          Rebranding internacional de La Pollería. (Abierto en Londres y en
          plena expansión internacional).
        </p>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-3s animate__slow">
          The Cockery es una tienda de gofres igualmente atrevida y divertida.
          Sus gofres tienen forma de pene, lo que les da un toque de
          originalidad y diversión. Aquí puedes disfrutar de gofres deliciosos y
          decorarlos con una selección de chocolates y toppings, adaptándolos a
          tu gusto. The Cockery es un lugar ideal para aquellos que deseen
          probar algo fuera de lo común y sorprenderse con su presentación
          única.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-3s animate__slower cursor-pointer"
            onClick={openThirdModal}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://www.instagram.com/thecockeryofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-3s animate__slower" />
          </a>
          <a
            href="https://www.thecockery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-3s animate__slower" />
          </a>
        </div>
      </div>
      <div className="bg-gray-700 border-2 border-white text-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInRight animate__delay-3s  animate__slow">
        <img
          src={fulkon}
          alt="Fulkon svp"
          className="w-24 h-24 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-4s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-4s animate__slow">
          FULKON
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInDown animate__delay-4s animate__slow">
          E-commerce de moda. Fase inicial / Crecimiento exponencial.
        </p>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slow">
          FULKON es un emocionante e-commerce de moda en fase inicial que está
          experimentando un crecimiento exponencial. Esta plataforma en línea se
          especializa en ofrecer una amplia selección de productos de moda,
          desde ropa hasta accesorios, que se adaptan a diferentes estilos y
          gustos. Con una propuesta fresca y contemporánea, FULKON se ha ganado
          rápidamente la atención de los amantes de la moda que buscan opciones
          únicas y de calidad.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slower cursor-pointer"
            onClick={openFourthModal}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://www.instagram.com/fulkonsvp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slower" />
          </a>
          <a
            href="https://fulkonsvp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-4s animate__slower" />
          </a>
        </div>
      </div>
      <div className="bg-black text-white border-2 border-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInLeft animate__delay-4s  animate__slow">
        <img
          src={worldcast}
          alt="WORLDCA$T"
          className="w-24 h-24 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow">
          WORLDCA$T
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow">
          El podcast con una de las mayores tasas de crecimiento en España.{" "}
        </p>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slow">
          Worldcast es un emocionante podcast dirigido por Pedro Buerbaum, donde
          cada jueves se presentan conversaciones auténticas y sin censura con
          invitados de diversos ámbitos. Con un enfoque en la espontaneidad y la
          variedad de temas, este podcast ofrece diálogos interesantes y
          enriquecedores que te sumergirán en una experiencia única y
          estimulante.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower cursor-pointer"
            onClick={openFifthModal}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://www.instagram.com/worldcast_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCuDm45jKrsTeEpx7BayVaiw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower" />
          </a>
        </div>
      </div>
      <div className="bg-gray-600 border-2 text-white border-white rounded-lg p-6 flex flex-col justify-center items-center project-card animate__animated animate__fadeIn animate__fadeInRight animate__delay-5s  animate__slow">
        <img
          src={Origen}
          alt="NO SUSPIRES"
          className="w-24 h-24 rounded-full mb-4 border-2 border-white animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow"
        />
        <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn animate__fadeInDown animate__delay-5s animate__slow">
          0.0 Origen (ft. Magec). NO SUSPIRES. powered by Skill Hunting
        </h3>
        <p className="text-justify animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slow">
          0.0 Origen desafía la comodidad y la virtualidad de nuestro mundo
          actual, invitándonos a salir de nuestra zona de confort y enfrentar
          los desafíos reales. Su evento de networking en Tenerife el 18 de
          junio de 2023, con la presencia de Magec y la dirección de Pedro,
          promete ser memorable y lleno de sorpresas. 0.0 Origen nos desafía a
          tomar el control de nuestras vidas y ser protagonistas de nuestra
          propia historia.
        </p>

        <div>
          <FaArrowRight
            className="text-3xl mt-5 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower cursor-pointer"
            onClick={openSixthModal}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://www.eventbrite.es/e/entradas-00-origen-ft-magec-648222269257?aff=InstagramPedroBuerbaum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower" />
          </a>

          <p className=" mr-2 font-extrabold text-2xl animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower">
            ||
          </p>

          <a
            href="https://www.instagram.com/_skillhunting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-3xl mr-2 icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower" />
          </a>

          <a
            href="https://www.skillhunting.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe className="text-3xl icon-card animate__animated animate__fadeIn animate__fadeInUp animate__delay-5s animate__slower" />
          </a>
        </div>
      </div>

      {/******** FIRST MODAL ********/}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeModal}
          ></div>
          <div
            id=""
            className={`bg-pink-200 border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">
              La Pollería
            </h2>
            <img
              src={lapolleria2}
              alt="La Pollería"
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "300px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              Expansión de tiendas propias y franquicias (más de 20 aperturas).
            </p>
            <p className="mb-4 mx-auto sm:text-justify  ">
              La Pollería es una original tienda especializada en deliciosos
              gofres con un enfoque divertido y audaz. Sus exquisitos gofres se
              caracterizan por su forma distintiva y llamativa, lo que los
              convierte en una experiencia única. Además de su originalidad,
              ofrecen una amplia variedad de chocolates y aderezos para
              personalizar tus gofres de manera deliciosa. La Pollería es el
              lugar ideal para aquellos que desean explorar una experiencia
              culinaria única y llena de diversión.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              2019-2023 La historia de La Pollería comenzó con la apertura de su
              primer local en el icónico barrio de Chueca en Madrid. Pedro
              Buerbaum decidió alquilar un pequeño espacio en un callejón del
              barrio, que apenas medía 11 metros cuadrados. Con creatividad y
              determinación, construyó él mismo los muebles utilizando madera
              encontrada en las calles. Con tan solo 900 euros en su cuenta, dio
              vida a su negocio y empezó a crear los primeros gofres en forma de
              pene de 17 centímetros. El éxito de La Pollería fue inmediato, con
              colas llenas de gente esperando desde el primer fin de semana para
              probar sus sabrosos pollofres. El entusiasmo fue abrumador y la
              demanda no dejó de crecer.
            </p>

            <a
              href="https://lapolleriaoriginal.com/encuentranos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Ubicaciones
            </a>
          </div>
        </div>
      )}

      {/******** SECOND MODAL ********/}

      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeSecondModal}
          ></div>
          <div
            className={`bg-blue-200 border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingSecondModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeSecondModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">La Coñería</h2>
            <img
              src={laconeria2}
              alt="La Coñería"
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "300px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              Por petición popular... La Pollería necesitaba contrapartida.
            </p>
            <p className="mb-4 mx-auto sm:text-justify  ">
              La Coñería es una tienda de gofres que desafía los moldes
              convencionales al ofrecer gofres con forma de vagina. Su enfoque
              audaz y divertido busca desafiar las normas establecidas y brindar
              una experiencia inusual y memorable. Con una amplia variedad de
              opciones de chocolates y aderezos, puedes personalizar tu gofre de
              una manera única y deliciosa, disfrutando de un sabor exquisito y
              una presentación fuera de lo común, perfecto tanto para los
              amantes de los gofres como para aquellos que buscan experimentar
              algo diferente en su aventura culinaria.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              Así que, si estás buscando algo diferente, emocionante y lleno de
              sabor, no busques más allá de La Coñería. Te invitamos a explorar
              y sumergirte en este mundo de gofres audaces y deliciosos que
              desafían las convenciones. ¡Prepárate para sorprender a tu paladar
              y dejar una impresión duradera en tu memoria culinaria!
            </p>

            <a
              href="https://goo.gl/maps/1UBxgN953RD39vaAA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 "
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Ubicaciones
            </a>
          </div>
        </div>
      )}

      {/******** Third MODAL ********/}

      {isThirdModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeThirdModal}
          ></div>
          <div
            className={`bg-pink-300 border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingThirdModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeThirdModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">
              The Cockery
            </h2>
            <img
              src={thecockery2}
              alt="The Cockery"
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "300px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              Rebranding internacional de La Pollería. (Abierto en Londres y en
              plena expansión internacional).
            </p>
            <p className="mb-4 mx-auto sm:text-justify  ">
              The Cockery es un emocionante rebranding internacional de La
              Pollería, una reconocida tienda de gofres. Abierto en Londres y en
              plena expansión internacional, The Cockery ha llegado para ofrecer
              una experiencia culinaria única y provocadora. Sus deliciosos
              gofres en forma de pene son el sello distintivo de este lugar
              atrevido y divertido.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              Ya sea que estés en Londres o en cualquier parte del mundo donde
              The Cockery esté expandiéndose, no pierdas la oportunidad de
              probar algo diferente y sumergirte en esta aventura gastronómica.
              The Cockery te invita a disfrutar de sus gofres atrevidos,
              divertidos y deliciosos. ¡Ven y vive una experiencia única en The
              Cockery!
            </p>

            <a
              href="https://goo.gl/maps/dYnLhRKW9eUzwkc18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-700 hover:text-pink-900 "
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Ubicaciones
            </a>
          </div>
        </div>
      )}

      {/******** FOURTH MODAL ********/}

      {isFourthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeFourthModal}
          ></div>
          <div
            className={`bg-gray-700 text-white border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingFourthModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeFourthModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">FULKON</h2>
            <img
              src={fulkon2}
              alt="FULKON"
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "400px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              E-commerce de moda. Fase inicial / Crecimiento exponencial.
            </p>
            <p className="mb-4 mx-auto sm:text-justify  ">
              FULKON es mucho más que un e-commerce de moda en fase inicial. Es
              una plataforma en línea emocionante que está cambiando la forma en
              que experimentamos la moda. Con su amplia selección de productos,
              enfoque fresco y contemporáneo, y una experiencia de compra
              excepcional, FULKON se ha convertido en un destino imprescindible
              para los amantes de la moda que buscan opciones únicas y de
              calidad.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              Además, FULKON se destaca por su compromiso con la satisfacción
              del cliente, brindando un servicio al cliente excepcional y
              garantizando una experiencia de compra sin problemas. No pierdas
              la oportunidad de unirte a esta emocionante revolución y descubrir
              un mundo de estilo y autenticidad en FULKON.
            </p>

            <a
              href="https://fulkonsvp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 "
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Tienda
            </a>
          </div>
        </div>
      )}

      {/******** FIFTH MODAL ********/}

      {isFifthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeFifthModal}
          ></div>
          <div
            className={`bg-black text-white border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingFifthModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeFifthModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">WORLDCA$T</h2>
            <img
              src={worldcast2}
              alt="The Cockery"
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "400px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              El podcast con una de las mayores tasas de crecimiento en España.
            </p>
            <p className="mb-4 mx-auto sm:text-justify  ">
              Worldcast es un podcast emocionante, presentado por Pedro
              Buerbaum, que te trae conversaciones auténticas y sin censura con
              invitados de diversos ámbitos. Cada jueves, sumérgete en diálogos
              interesantes y enriquecedores que exploran una amplia variedad de
              temas. Con un enfoque en la espontaneidad y la diversidad de
              contenido, este podcast te ofrece una experiencia única y
              estimulante que te mantendrá enganchado.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              Worldcast se destaca por su compromiso con la calidad y la
              excelencia. Cada episodio es cuidadosamente producido y editado
              para brindarte una experiencia auditiva de primer nivel. Los temas
              abordados van desde tendencias actuales hasta reflexiones
              profundas, ofreciéndote una amplia gama de perspectivas únicas. El
              objetivo principal de Worldcast es inspirar, informar y entretener
              a su audiencia, despertando la curiosidad y promoviendo la
              reflexión. ¡Sumérgete en un mundo de ideas fascinantes a través de
              este apasionante podcast! Sintoniza Worldcast y disfruta de
              conversaciones sin filtros que te cautivarán.
            </p>

            <a
              href="https://www.youtube.com/@worldcast_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 mr-4"
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Podcast
            </a>
            <a
              href="https://tr.ee/j9Dkqfmnlv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 "
            >
              <FaVolumeUp className="inline-block w-7 h-7 mr-2"></FaVolumeUp>
              Escuchar Podcast
            </a>
          </div>
        </div>
      )}

      {/******** SIXTH MODAL ********/}

      {isSixthModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0"
            onClick={closeSixthModal}
          ></div>
          <div
            className={`bg-gray-600 text-white border-2 border-white m-6 rounded-lg relative text-center max-w-3xl mx-6 sm:p-4 animate__animated ${
              isClosingSixthModal ? "animate__fadeOutDown" : "animate__fadeIn"
            } animate__fadeInDown animate__slow`}
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <button
              onClick={closeSixthModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <img
                src={cerrar}
                className="h-7 w-7"
              />
            </button>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">0.0 Origen</h2>
            <h2 className="text-4xl mt-3 font-bold mb-4 mx-auto">
              NO SUSPIRES
            </h2>

            <video
              src={VideoPedroBuerbaum}
              autoPlay
              loop
              muted
              className="mx-auto mb-4 rounded-lg max-w-full h-auto border-2 border-white w-full"
              style={{ maxWidth: "400px" }}
            />
            <p className="mb-2 mx-auto sm:text-center">
              El evento que cambiará tu vida.
            </p>
            <p className="mb-4 mx-auto sm:text-justify">
              0.0 Origen es mucho más que un simple evento de networking. Es una
              experiencia transformadora que desafía la comodidad y la
              virtualidad de nuestro mundo actual, invitándonos a salir de
              nuestra zona de confort y enfrentar los desafíos reales. Con la
              presencia destacada de Magec y bajo la dirección experta de Pedro,
              el evento que se llevará a cabo en Tenerife el 18 de junio de 2023
              promete ser una experiencia inolvidable y llena de sorpresas.
            </p>

            <p className="mb-4 mx-auto sm:text-justify">
              También nos invita a tomar el control de nuestras vidas y
              convertirnos en protagonistas de nuestra propia historia. A través
              de actividades interactivas, charlas inspiradoras y conexiones
              significativas, este evento nos desafía a superar nuestros
              límites, explorar nuevas oportunidades y abrirnos a un mundo de
              posibilidades.
            </p>

            <a
              href="https://www.eventbrite.es/e/entradas-00-origen-ft-magec-648222269257?aff=InstagramPedroBuerbaum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-900 "
            >
              <FaEye className="inline-block w-7 h-7 mr-2"></FaEye>
              Ver Evento
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
