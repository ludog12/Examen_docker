const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Asegúrate de tener un directorio 'public' que contenga tus archivos estáticos.

// Ruta para servir la página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/send-email', (req, res) => {
  const { from, to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ludmigoon31@gmail.com',
      pass: 'xfgj eqbf aiol bepp',
    },
  });


  const mailOptions = {
    from: 'ludmigon312@gmail.com',
    to,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: `Error al enviar el correo. Error ${error}` });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.json({ message: 'Correo enviado con éxito.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
