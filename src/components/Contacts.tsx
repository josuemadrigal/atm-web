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
    <div id="contacts" className="flex justify-center ">
      <div className="flex md:flex-row flex-col justify-center max-w-7xl m-4 ">
        <div className="lg:w-1/2 bg-gray-100 ">
          <div className="flex justify-center flex-col items-center">
            <div className="text-gray-900 m-6 text-xl z-200"> Contact Us </div>
            <div className="text-gray-900 m-6 z-200">
              {" "}
              We are always here to help out whatever way we can{" "}
            </div>
            <div className="text-gray-900 m-6 z-200">
              <div className="flex m-2">
                <input
                  placeholder="Name"
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="flex m-2">
                <input
                  placeholder="E-mail"
                  type="email"
                  id="destinatario"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
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
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="bg-gray-800 p-2 rounded-3xl"
                />
              </div>
              <div className="block m-2justify-center">
                <div className="bg-blue-700 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
                  <div className="flex justify-center" onClick={enviarMensaje}>
                    {" "}
                    Send{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 lg:w-2/3 ">
          <div className="w-3/4 lg:w-1/2 overflow-contain h-min">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.325370562236!2d-80.4153221!3d25.6273246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c36083a52943%3A0xa318cf43332f0309!2s13727%20SW%20152nd%20St%20NUM%20660%2C%20Miami%2C%20FL%2033177%2C%20EE.%20UU.!5e0!3m2!1ses!2sdo!4v1703304089825!5m2!1ses!2sdo"
              width="500"
              height="500"
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
