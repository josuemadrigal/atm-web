const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Habilita el intercambio de cookies a través de las solicitudes
};

app.use(cors(corsOptions));

// Configuración de nodemailer (ajusta esto con tus propios datos)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "josuemadrigal12@gmail.com",
    pass: "sean ygkb eoet sopp",
  },
});

app.post("/enviar-mensaje", async (req, res) => {
  const { name, email, mensaje } = req.body;

  // Enviar mensaje al correo
  await transporter.sendMail({
    from: "ejemplo",
    to: "josuemadrigal12@gmail.com",
    subject: "Nuevo mensaje recibido",
    text: mensaje,
  });

  // Enviar correo de confirmación al
  await transporter.sendMail({
    from: "josuemadrigal12@gmail.com",
    to: email,
    subject: "Mensaje enviado con éxito",
    text: `Hola ${name}, Tu mensaje ha sido enviado con éxito.`,
  });

  res.status(200).json({ message: "Mensaje enviado con éxito" });
});

app.get("/", function (req, res) {
  res.set("Content-Type", "text/html; charset=utf-8");
  res.send("<h1>Servidor Activo</h1>");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
