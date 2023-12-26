import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactsDos = () => {
  const dataContact = [
    {
      ico: <FaLocationDot size={25} />,
      title: "Phone",
      data: "+1 (561) 608-0446",
      href: "tel:+15616080446",
    },
    {
      ico: <MdEmail size={25} />,
      title: "Email",
      data: "info@example.com",
      href: "mailto:info@example.com",
    },
    {
      ico: <MdEmail size={25} />,
      title: "Address",
      data: "13727 SW 152ND ST NUM 660, MIAMI, FL 33177, USA",
      href: "mailto:info@example.com",
    },
  ];
  const [status, setStatus] = useState("");
  const [nombre, setNombre] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = async () => {
    const name = nombre.split(" ")[0];
    try {
      const response = await fetch("http://localhost:3001/enviar-mensaje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, destinatario, mensaje }),
      });

      if (response.ok) {
        setStatus("Mensaje enviado con éxito");
        console.log("Mensaje enviado con éxito");
      } else {
        setStatus("Error al enviar el mensaje");
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  return (
    <section className="text-gray-600 body-font ga relative">
      <div className="container px-5 sm:py-24 mx-auto grid sm:flex-nowrap  flex- wrap">
        <div className="flex flex-col lg:flex-row space-y-10 md:space-y-4 lg:space-y-0  lg:space-x-10">
          <div className="order-3 md:order-1 xl:w-2/12  w-12/12 bg-stone-100 rounded-2xl p-5 flex flex-col space-y-14 justify-center md:ml-auto w-full  ">
            {dataContact.map((item) => (
              <div className="text-center text-gray-500 dark:text-amber-400">
                <div className="flex justify-center">{item.ico}</div>
                <h2 className="font-black uppercase text-gray-900 text-lg ">
                  {item.title}
                </h2>
                <a
                  className="leading-relaxed text-gray-800"
                  href="tel:+15616080446"
                >
                  {item.data}
                </a>
              </div>
            ))}
          </div>
          <div className="order-2 md:order-2 xl:w-4/12 w-12/12 bg-neutral-200 rounded-2xl p-10 flex flex-col md:ml- auto w-full ">
            <h2 className="text- gray-900 text-lg mb-1 font-black title-font">
              Contact our Sales team
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Fill out this form, and we'll get in touch with you as soon as
              possible. We look forward to receiving your information and
              assisting you promptly!
            </p>
            <div className="text- gray-900 m -6 space-y-2 z-200">
              <div className="f ex ">
                <input
                  placeholder="Name"
                  className="bg-gray-100 p-2 pl-5 w-full rounded-3xl"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="fl ex">
                <input
                  placeholder="E-mail "
                  pattern=".+@example\.com"
                  required
                  type="email"
                  id="destinatario"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                  className="bg-gray-100 p-2 pl-5 w-full rounded-3xl"
                />
              </div>
              <div className="fl ex">
                <input
                  placeholder="Phone"
                  className="bg-gray-100 p-2 pl-5 w-full rounded-3xl"
                />
              </div>
              <div className="fl ex">
                <textarea
                  placeholder="Type your message"
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="bg-gray-100 p-2 pl-5 w-full rounded-3xl"
                />
              </div>
              <div className="block m-2 justify-center">
                <div className="bg-amber-500 p-2 rounded-3xl hover:bg-blue-800 cursor-pointer ">
                  <div className="flex justify-center" onClick={enviarMensaje}>
                    {" "}
                    Send{" "}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-900 mt-3">{status}</p>
          </div>
          <div className="order-1 md:order-3 xl:w-6/12 w-12/12 bg-a mber-400 justify-between flex flex-col">
            {" "}
            <div className="">
              <h2 className="text-small font-black text-amber-500 ">
                Contact Us
              </h2>
              <h1 className="text-3xl font-black w-11/12">
                Partner with us for a banking experience that prioritizes
                innovation, reliability, efficiency, and global accessibility.
              </h1>
              <h4 className="mt-2 font-light">
                We look forward to serving you soon!
              </h4>
            </div>
            <img src="/veteran-business.png" className="w-32 h-auto" />
            <div className=" w-full h-32 bg-stone-100 rounded-2xl overflow-hidden  p-3 flex flex-col space-y-14 justify-center md:ml-auto  md:py-8 mt-8 md:mt-0 relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.325370562236!2d-80.4153221!3d25.6273246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c36083a52943%3A0xa318cf43332f0309!2s13727%20SW%20152nd%20St%20NUM%20660%2C%20Miami%2C%20FL%2033177%2C%20EE.%20UU.!5e0!3m2!1ses!2sdo!4v1703304089825!5m2!1ses!2sdo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsDos;
