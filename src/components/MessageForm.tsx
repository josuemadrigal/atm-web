// MessageForm.tsx

import React, { useState } from "react";

const MessageForm: React.FC = () => {
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
    <div>
      <label htmlFor="destinatario">Destinatario:</label>
      <input
        type="email"
        id="destinatario"
        value={destinatario}
        onChange={(e) => setDestinatario(e.target.value)}
      />

      <label htmlFor="mensaje">Mensaje:</label>
      <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button onClick={enviarMensaje}>Enviar Mensaje</button>
    </div>
  );
};

export default MessageForm;
