import { useState } from "react";

const Contacts = () => {
  const [destinatario, setDestinatario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = async () => {
    try {
      const response = await fetch("http://localhost:3001/enviar-mensaje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ destinatario, mensaje }),
      });

      if (response.ok) {
        console.log("Mensaje enviado con éxito");
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex md:flex-row flex-col justify-center max-w-7xl m-4 ">
        <div className="lg:w-1/2 bg-black ">
          <div className="flex justify-center flex-col items-center">
            <div className="text-white m-6 text-xl z-200"> Contact Us </div>
            <div className="text-white m-6 z-200">
              {" "}
              We are always here to help out whatever way we can{" "}
            </div>
            <div className="text-white m-6 z-200">
              <div className="flex m-2">
                <input
                  placeholder="Name"
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="flex m-2">
                <input
                  placeholder="E-mail"
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="flex m-2">
                <input
                  placeholder="Phone"
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="flex m-2">
                <textarea
                  placeholder="Type your message"
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="block m-2justify-center">
                <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
                  <div className="flex justify-center"> Send </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 lg:w-2/3 ">
          <div className="w-3/4 lg:w-1/2 overflow-contain h-min">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin"
              width="375"
              height="667"
              className=""
              loading="lazy"
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
