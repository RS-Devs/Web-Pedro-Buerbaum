import { useState, useEffect } from "react";
import BackgroundVideo from "./BackgroundVideo";
import "animate.css";

import contact from "./assets/img/contact/contact.png";

const MAX_FORM_SIZE = 500;

const ContactSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const emailInput = e.target.elements.email;
    const messageInput = e.target.elements.message;

    setErrorMessages([]);

    if (!nameInput.value) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El campo Nombre es obligatorio",
      ]);
      nameInput.classList.add("border-error");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El campo Nombre solo acepta letras y espacios",
      ]);
      nameInput.classList.add("border-error");
      return;
    }

    if (nameInput.value.length < 5 || nameInput.value.length > 15) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El campo Nombre debe contener entre 5 y 15 caracteres",
      ]);
      nameInput.classList.add("border-error");
      return;
    }

    if (!emailInput.value) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El campo Correo electrónico es obligatorio",
      ]);
      emailInput.classList.add("border-error");
      return;
    }

    if (
      !/^\w+([.-]?\w+)*@(gmail|yahoo|outlook|protonmail)+(\.com|\.mx|\.es)$/.test(
        emailInput.value
      )
    ) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El formato del correo electrónico no es válido. Debe ser @gmail.com/.es, @yahoo.com/.es, @outlook.com/.es o @protonmail.com/.es (sin símbolos).",
        "Por motivos de seguridad",
      ]);
      emailInput.classList.add("border-error");
      return;
    }

    if (messageInput.value.length < 20) {
      setErrorMessages((prevErrors) => [
        ...prevErrors,
        "El mensaje es obligatorio y debe tener al menos 20 caracteres",
      ]);
      messageInput.classList.add("border-error");
      return;
    }

    const formSize =
      nameInput.value.length +
      emailInput.value.length +
      messageInput.value.length;
    if (formSize > MAX_FORM_SIZE) {
      alert("El tamaño del formulario excede el límite máximo.");
      return;
    }

    // Establecer la URL de destino del formulario
    e.target.action = "https://formspree.io/f/mwkdeowj";

    e.target.submit();

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  };

  const clearError = (e) => {
    e.target.classList.remove("border-error");
    setErrorMessages([]);
  };

  useEffect(() => {
    if (errorMessages.length > 0) {
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        setErrorMessages([]);
      }, 3000);
    }
  }, [errorMessages]);

  return (
    <div
      className="p-6 flex flex-col items-center"
      style={{ maxHeight: "100vh", overflowY: "auto", position: "relative" }}
    >
      <BackgroundVideo />

      <div className="rounded-lg p-8 z-10 w-full max-w-md ">
        <div className="flex flex-col items-center justify-center mb-8 ">
          <img
            src={contact}
            alt="Imagen de contacto Pedro en la costa"
            className="w-48 h-48 rounded-full border-4 border-white animate__animated animate__fadeInDown  animate__slow"
          />
        </div>
        <h2 className="text-4xl mb-6 text-white font-bold text-center animate__animated animate__fadeInDown animate__delay-1s animate__slow">
          Contacto
        </h2>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <div className="animate__animated animate__fadeInDown animate__delay-2s animate__slow">
            <label htmlFor="name" className="text-lg text-white">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
              required
              onFocus={clearError}
            />
            <span className="text-red-500"></span>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-3s animate__slow">
            <label htmlFor="email" className="text-lg text-white">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
              required
              onFocus={clearError}
            />
            <span className="text-red-500"></span>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-4s animate__slow">
            <label htmlFor="message" className="text-lg text-white">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1"
              required
            ></textarea>
          </div>
          <div className="text-center animate__animated animate__fadeInDown animate__delay-5s animate__slow">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full" aria-label="Enviar"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 flex text-center items-center justify-center z-20 mx-9">
          <div className="bg-white rounded-lg shadow-lg p-4">
            {errorMessages.map((errorMessage, index) => (
              <p key={index} className="text-red-500 mb-2 font-bold">
                {errorMessage}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
