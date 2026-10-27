const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi aplicación Docker</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f0f4f8;
          text-align: center;
          padding: 80px 20px;
        }
        .contenedor {
          background: white;
          max-width: 550px;
          margin: auto;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 4px 15px #0002;
        }
        h1 { color: #2563eb; }
      </style>
    </head>
    <body>
      <div class="contenedor">
        <h1>¡Aplicación funcionando!</h1>
        <p>La aplicación web se ejecuta correctamente.</p>
        <p>Servidor: Node.js + Express</p>
        <p>Contenedor: Docker</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

